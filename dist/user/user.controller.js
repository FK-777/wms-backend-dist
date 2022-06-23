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
exports.UserController = void 0;
const reset_password_dto_1 = require("./dto/reset-password.dto");
const create_forgot_password_dto_1 = require("./dto/create-forgot-password.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const verify_uuid_dto_1 = require("./dto/verify-uuid.dto");
const user_service_1 = require("./user.service");
const refresh_access_token_dto_1 = require("./dto/refresh-access-token.dto");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../auth/guards/roles.guard");
const update_user_dto_1 = require("./dto/update-user.dto");
const resend_verification_dto_1 = require("./dto/resend-verification.dto");
const role_service_1 = require("../role/role.service");
const dto_1 = require("../shared/dto");
const get_user_dto_1 = require("./dto/get-user.dto");
const change_password_dto_1 = require("./dto/change-password.dto");
const currentUser_decorator_1 = require("../auth/decorators/currentUser.decorator");
const update_user_service_dto_1 = require("./dto/update-user-service.dto");
const util_service_1 = require("../shared/services/util/util.service");
const upload_service_1 = require("../upload/upload.service");
let UserController = class UserController {
    constructor(userService, roleService, uploadService) {
        this.userService = userService;
        this.roleService = roleService;
        this.uploadService = uploadService;
    }
    async signup(createUserDto) {
        const role = await this.roleService.findOneByIdentifier(createUserDto.role);
        if (!role || !role.isPublic || role.identifier === "admin") {
            throw new common_1.BadRequestException("Invalid role selected");
        }
        return await this.userService.signup({
            fName: createUserDto.fName, lName: createUserDto.lName, designation: createUserDto.designation, officeName: createUserDto.officeName, email: createUserDto.email,
            password: createUserDto.password, RoleId: role._id, OfficeId: createUserDto.OfficeId,
            pNumber: createUserDto.pNumber, university: createUserDto.university, address: createUserDto.address,
            city: createUserDto.city, lat: createUserDto.lat, lng: createUserDto.lng, pin: createUserDto.pin
        });
    }
    async verifyEmail(req, verifyUuidDto) {
        return await this.userService.verifyEmail(req, verifyUuidDto);
    }
    async verifyEmailSendNew(req, resendVerificationDto) {
        return await this.userService.resendAccountVerificationEmail(resendVerificationDto);
    }
    async login(req, loginUserDto) {
        return await this.userService.login(req, loginUserDto);
    }
    async refreshAccessToken(refreshAccessTokenDto) {
        return await this.userService.refreshAccessToken(refreshAccessTokenDto);
    }
    async forgotPassword(req, createForgotPasswordDto) {
        return await this.userService.forgotPassword(req, createForgotPasswordDto);
    }
    async forgotPasswordVerify(req, verifyUuidDto) {
        return await this.userService.forgotPasswordVerify(req, verifyUuidDto);
    }
    async resetPassword(resetPasswordDto) {
        return await this.userService.resetPassword(resetPasswordDto);
    }
    async create(createUserDto) {
        const role = await this.roleService.findOneByIdentifier(createUserDto.role);
        return this.userService.create({
            fName: createUserDto.fName, lName: createUserDto.lName, designation: createUserDto.designation, officeName: createUserDto.officeName, email: createUserDto.email,
            password: createUserDto.password, RoleId: role._id, OfficeId: createUserDto.OfficeId,
            pNumber: createUserDto.pNumber, university: createUserDto.university, address: createUserDto.address,
            city: createUserDto.city, lat: createUserDto.lat, lng: createUserDto.lng, pin: createUserDto.pin
        });
    }
    findAll(getUserDto, currentUser) {
        return this.userService.findUsers(getUserDto);
    }
    countRecords(getUserDto) {
        return this.userService.findUsersCount(getUserDto);
    }
    changePassword(changePasswordDto, currentUser) {
        console.log(currentUser.email);
        return this.userService.changePassword(currentUser.email, changePasswordDto);
    }
    findOne({ id }) {
        return this.userService.findOneUser(id);
    }
    async update({ id }, updateUserDto) {
        const user = await this.userService.findOneUser(id);
        if (!user)
            throw new common_1.BadRequestException("User not found");
        const updateUserServiceDto = new update_user_service_dto_1.UpdateUserServiceDto();
        if (user.RoleId['identifier'] !== updateUserDto.role) {
            const role = await this.roleService.findOneByIdentifier(updateUserDto.role);
            if (!role)
                throw new common_1.BadRequestException("Role not found");
            updateUserServiceDto.RoleId = role._id;
        }
        if (updateUserDto.fName)
            updateUserServiceDto.fName = updateUserDto.fName;
        if (updateUserDto.lName)
            updateUserServiceDto.lName = updateUserDto.lName;
        if (updateUserDto.email)
            updateUserServiceDto.email = updateUserDto.email;
        if (updateUserDto.password)
            updateUserServiceDto.password = updateUserDto.password;
        return this.userService.update(id, updateUserServiceDto);
    }
    async updateProfile(updateUserDto, currentUser) {
        const user = await this.userService.findOneUser(currentUser._id);
        if (!user)
            throw new common_1.BadRequestException("User not found");
        const updateUserServiceDto = new update_user_service_dto_1.UpdateUserServiceDto();
        if (updateUserDto.fName)
            updateUserServiceDto.fName = updateUserDto.fName;
        if (updateUserDto.lName)
            updateUserServiceDto.lName = updateUserDto.lName;
        if (updateUserDto.profilePicture) {
            updateUserServiceDto.profilePicture = util_service_1.UtilService.removeQueryString(updateUserDto.profilePicture);
            if (user.profilePicture && user.profilePicture !== updateUserServiceDto.profilePicture) {
                this.uploadService.removeFromUse(user.profilePicture);
            }
            this.uploadService.setInUse(updateUserServiceDto.profilePicture);
        }
        return this.userService.update(currentUser._id, updateUserServiceDto);
    }
};
__decorate([
    common_1.Post("auth/signup"),
    roles_guard_1.Public(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiCreatedResponse({}),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Post("auth/verify-email"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verify_uuid_dto_1.VerifyUuidDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyEmail", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Post("auth/resend-verify-email"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, resend_verification_dto_1.ResendVerificationDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyEmailSendNew", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Post("auth/login"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Post("auth/refresh-access-token"),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiCreatedResponse({}),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_access_token_dto_1.RefreshAccessTokenDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "refreshAccessToken", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Post("auth/forgot-password"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_forgot_password_dto_1.CreateForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPassword", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Post("auth/forgot-password-verify"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, verify_uuid_dto_1.VerifyUuidDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPasswordVerify", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Post("auth/reset-password"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOkResponse({}),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    common_1.Post("user"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Get("user"),
    __param(0, common_1.Query()),
    __param(1, currentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_dto_1.GetUserDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    common_1.Get("user/count"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_dto_1.GetUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "countRecords", null);
__decorate([
    common_1.Post("user/change-password"),
    __param(0, common_1.Body()),
    __param(1, currentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "changePassword", null);
__decorate([
    common_1.Get("user/:id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    common_1.Patch("user/:id"),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Patch("user"),
    __param(0, common_1.Body()),
    __param(1, currentUser_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
UserController = __decorate([
    common_1.Controller(""),
    __metadata("design:paramtypes", [user_service_1.UserService, role_service_1.RoleService, upload_service_1.UploadService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map