"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const auth_service_1 = require("./../auth/auth.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const uuid_1 = require("uuid");
const date_fns_1 = require("date-fns");
const bcrypt = require("bcrypt");
const email_service_1 = require("../shared/services/email/email.service");
const role_service_1 = require("../role/role.service");
let UserService = class UserService {
    constructor(userModel, forgotPasswordModel, authService, emailService, roleService) {
        this.userModel = userModel;
        this.forgotPasswordModel = forgotPasswordModel;
        this.authService = authService;
        this.emailService = emailService;
        this.roleService = roleService;
        this.HOURS_TO_VERIFY = 24;
        this.HOURS_TO_BLOCK = 6;
        this.LOGIN_ATTEMPTS_TO_BLOCK = 5;
    }
    async signup(createUserServiceDto) {
        const user = new this.userModel(createUserServiceDto);
        await this.isEmailUnique(user.email);
        this.setVerificationInfo(user);
        await user.save();
        const emailBody = this.emailService.loadTemplate("account-verification", user);
        await this.emailService.send(user.email, "Account Verification", emailBody, emailBody);
        return {
            fName: user.fName,
            lName: user.lName,
            email: user.email,
            verified: user.verified,
        };
    }
    async resendAccountVerificationEmail(resendVerificationDto) {
        const user = await this.userModel.findOne({ email: resendVerificationDto.email });
        if (!user) {
            throw new common_1.NotFoundException("Email not found");
        }
        this.setVerificationInfo(user);
        await user.save();
        const emailBody = this.emailService.loadTemplate("account-verification", user);
        await this.emailService.send(user.email, "Account Verification", emailBody, emailBody);
        return {
            email: user.email,
            success: 1
        };
    }
    async verifyEmail(req, verifyUuidDto) {
        try {
            const user = await this.userModel.findOne({
                verification: verifyUuidDto.verification,
                verified: false,
                verificationExpires: { $gt: new Date() },
            });
            if (!user) {
                throw new common_1.BadRequestException("Invalid or expired link.");
            }
            user.verified = true;
            user.verification = "";
            user.verificationExpires = null;
            await user.save();
            return {
                id: user._id,
                fName: user.fName,
                lName: user.lName,
                email: user.email,
                RoleId: user.RoleId,
                accessToken: await this.authService.createAccessToken(user._id),
                refreshToken: await this.authService.createRefreshToken(req, user._id),
            };
        }
        catch (error) {
            throw new common_1.BadRequestException("Invalid or expired link.");
        }
    }
    async login(req, loginUserDto) {
        try {
            const user = await this.userModel.findOne({ email: loginUserDto.email });
            if (!user) {
                throw new common_1.NotFoundException("Invalid email or password.");
            }
            const isPasswordMatched = await this.isPasswordMatched(loginUserDto.password, user.password);
            if (!isPasswordMatched) {
                user.loginAttempts += 1;
                if (user.loginAttempts >= this.LOGIN_ATTEMPTS_TO_BLOCK) {
                    user.isBlocked = true;
                }
                if (user.isBlocked) {
                    throw new common_1.BadRequestException("Please reset password", "account-blocked");
                }
                await user.save();
                throw new common_1.NotFoundException("Invalid email or password.");
            }
            if (!user.verified) {
                throw new common_1.BadRequestException("Please verify you account", "verify-account");
            }
            if (user.isBlocked) {
                throw new common_1.BadRequestException("Please reset password", "account-blocked");
            }
            user.loginAttempts = 0;
            await user.save();
            const role = await this.roleService.findOneCached(user.RoleId);
            return {
                id: user._id,
                fName: user.fName,
                lName: user.lName,
                designation: user.designation,
                email: user.email,
                pNumber: user.pNumber,
                lat: user.lat,
                lng: user.lng,
                pin: user.pin,
                university: user.university,
                address: user.address,
                city: user.city,
                profilePicture: user.profilePicture || "",
                RoleId: user.RoleId,
                role: role ? role.identifier : "",
                OfficeId: user.OfficeId,
                permissions: role ? role.permissions : [],
                accessToken: await this.authService.createAccessToken(user._id),
                refreshToken: await this.authService.createRefreshToken(req, user._id),
            };
        }
        catch (error) {
            throw new common_1.NotFoundException("Invalid email or password.");
        }
    }
    async refreshAccessToken(refreshAccessTokenDto) {
        const userId = await this.authService.findRefreshToken(refreshAccessTokenDto.refreshToken);
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new common_1.BadRequestException("Bad request");
        }
        return {
            accessToken: await this.authService.createAccessToken(user._id),
        };
    }
    async forgotPassword(req, createForgotPasswordDto) {
        const forgotPassword = await this.forgotPasswordModel.create({
            email: createForgotPasswordDto.email,
            verification: uuid_1.v4(),
            expires: date_fns_1.addHours(new Date(), this.HOURS_TO_VERIFY),
            ip: this.authService.getIp(req),
            browser: this.authService.getBrowserInfo(req),
            country: this.authService.getCountry(req),
        });
        await forgotPassword.save();
        const emailBody = this.emailService.loadTemplate("forgot-password", forgotPassword);
        await this.emailService.send(forgotPassword.email, "Reset Password", emailBody, emailBody);
        return {
            email: createForgotPasswordDto.email,
            success: 1,
        };
    }
    async forgotPasswordVerify(req, verifyUuidDto) {
        const forgotPassword = await this.forgotPasswordModel.findOne({
            verification: verifyUuidDto.verification,
            finalUsed: false,
            expires: { $gt: new Date() },
        });
        if (!forgotPassword) {
            throw new common_1.BadRequestException("Invalid or expired link");
        }
        forgotPassword.firstUsed = true;
        forgotPassword.ipChanged = this.authService.getIp(req);
        forgotPassword.browserChanged = this.authService.getBrowserInfo(req);
        forgotPassword.countryChanged = this.authService.getCountry(req);
        await forgotPassword.save();
        return {
            email: forgotPassword.email,
            success: 1,
        };
    }
    async resetPassword(resetPasswordDto) {
        const forgotPassword = await this.forgotPasswordModel.findOne({
            email: resetPasswordDto.email,
            firstUsed: true,
            finalUsed: false,
            expires: { $gt: new Date() },
        });
        if (!forgotPassword) {
            throw new common_1.BadRequestException("Invalid or expired link");
        }
        forgotPassword.finalUsed = true;
        await forgotPassword.save();
        await this.resetUserPassword(resetPasswordDto);
        return {
            email: resetPasswordDto.email,
            success: 1,
        };
    }
    async changePassword(email, changePasswordDto) {
        const user = await this.userModel.findOne({ email: email });
        if (!user) {
            throw new common_1.NotFoundException("Invalid password.");
        }
        if (!user.verified) {
            throw new common_1.BadRequestException("Please verify you account", "verify-account");
        }
        if (user.isBlocked) {
            throw new common_1.BadRequestException("Please reset password using link on the login", "account-blocked");
        }
        const isPasswordMatched = await this.isPasswordMatched(changePasswordDto.password, user.password);
        if (!isPasswordMatched) {
            user.loginAttempts += 1;
            if (user.loginAttempts >= this.LOGIN_ATTEMPTS_TO_BLOCK) {
                user.isBlocked = true;
            }
            await user.save();
            throw new common_1.NotFoundException("Invalid password.");
        }
        user.loginAttempts = 0;
        user.password = changePasswordDto.newPassword;
        await user.save();
        return {
            email: email,
            success: 1,
        };
    }
    findUsers(getUserDto) {
        const where = {};
        const roleWhere = {
            $expr: { $eq: ["$_id", "$$roleId"] }
        };
        if (getUserDto.s) {
            if (!where["$or"])
                where["$or"] = [];
            where["$or"].push({ fName: new RegExp(getUserDto.s, "i") }, { lName: new RegExp(getUserDto.s, "i") }, { email: new RegExp(getUserDto.s, "i") }, { phone: new RegExp(getUserDto.s, "i") });
        }
        if (getUserDto.email) {
            where["email"] = getUserDto.email;
        }
        if (getUserDto.roleId) {
            where["RoleId"] = new mongoose.Types.ObjectId(getUserDto.roleId);
        }
        if (getUserDto.role) {
            roleWhere["identifier"] = getUserDto.role;
        }
        if (getUserDto.phone) {
            where["phone"] = getUserDto.phone;
        }
        if (getUserDto.verified) {
            where['verified'] = getUserDto.verified === '1' ? true : false;
        }
        if (getUserDto.blocked) {
            where['isBlocked'] = getUserDto.blocked === '1' ? true : false;
        }
        return this.userModel.aggregate([
            { "$match": where },
            {
                $lookup: {
                    from: 'roles',
                    as: 'role',
                    let: { roleId: '$RoleId' },
                    pipeline: [
                        {
                            $match: roleWhere,
                        }
                    ]
                }
            },
            { $unwind: "$role" },
            {
                $project: { verification: 0, password: 0, verificationExpires: 0 }
            },
            { $sort: { [getUserDto.sb]: Number(getUserDto.sd) } },
            { $skip: Number(getUserDto.o) },
            { $limit: Number(getUserDto.l) },
        ]);
    }
    async findUsersCount(getUserDto) {
        try {
            const where = {};
            const roleWhere = {
                $expr: { $eq: ["$_id", "$$roleId"] }
            };
            if (getUserDto.s) {
                if (!where["$or"])
                    where["$or"] = [];
                where["$or"].push({ fName: new RegExp(getUserDto.s, "i") }, { lName: new RegExp(getUserDto.s, "i") }, { email: new RegExp(getUserDto.s, "i") }, { phone: new RegExp(getUserDto.s, "i") });
            }
            if (getUserDto.email) {
                where["email"] = getUserDto.email;
            }
            if (getUserDto.roleId) {
                where["RoleId"] = new mongoose.Types.ObjectId(getUserDto.roleId);
            }
            if (getUserDto.role) {
                roleWhere["identifier"] = getUserDto.role;
            }
            if (getUserDto.phone) {
                where["phone"] = getUserDto.phone;
            }
            if (getUserDto.verified) {
                where['verified'] = getUserDto.verified === '1' ? true : false;
            }
            if (getUserDto.blocked) {
                where['isBlocked'] = getUserDto.blocked === '1' ? true : false;
            }
            const countResult = await this.userModel.aggregate([
                { "$match": where },
                {
                    $lookup: {
                        from: 'roles',
                        as: 'role',
                        let: { roleId: '$RoleId' },
                        pipeline: [
                            {
                                $match: roleWhere,
                            }
                        ]
                    }
                },
                { $unwind: "$role" },
                { $count: "count" }
            ]);
            if (!countResult.length)
                return { count: 0 };
            return countResult[0];
        }
        catch (error) {
            return { count: 0 };
        }
    }
    findOneUser(id) {
        return this.userModel.findById(id)
            .select(['-verification', '-password', '-verificationExpires'])
            .populate("RoleId")
            .exec();
    }
    removeUser(id) {
        return this.userModel.deleteOne({ _id: id }).exec();
    }
    async create(createUserServiceDto) {
        createUserServiceDto[`verified`] = true;
        const user = new this.userModel(createUserServiceDto);
        await this.isEmailUnique(user.email);
        await user.save();
        return {
            fName: user.fName,
            lName: user.lName,
            email: user.email,
            verified: user.verified,
        };
    }
    async update(id, updateUserServiceDto) {
        try {
            const user = await this.userModel.findById(id);
            user.set(updateUserServiceDto);
            await user.save();
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException("User could not bbe updated");
        }
    }
    async updateUserInfo(UserId, key, value) {
        const user = await this.userModel.findById(UserId);
        if (!user)
            return false;
        let info = user.info;
        if (!info)
            info = {};
        info[key] = value;
        await this.userModel.updateOne({ _id: UserId }, { info }).exec();
        return true;
    }
    async isEmailUnique(email) {
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new common_1.ConflictException("Email already exist");
        }
    }
    setVerificationInfo(user) {
        user.verification = uuid_1.v4();
        user.verificationExpires = date_fns_1.addHours(new Date(), this.HOURS_TO_VERIFY);
    }
    async isPasswordMatched(attemptPass, password) {
        return await bcrypt.compare(attemptPass, password);
    }
    async resetUserPassword(resetPasswordDto) {
        const user = await this.userModel.findOne({
            email: resetPasswordDto.email
        });
        user.verified = true;
        user.password = resetPasswordDto.password;
        await user.save();
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("User")),
    __param(1, mongoose_1.InjectModel("ForgotPassword")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        auth_service_1.AuthService,
        email_service_1.EmailService,
        role_service_1.RoleService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map