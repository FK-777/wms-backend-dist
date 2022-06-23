import { ResetPasswordDto } from "./dto/reset-password.dto";
import { Request } from "express";
import { AuthService } from "./../auth/auth.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { Model } from "mongoose";
import * as mongoose from "mongoose";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { VerifyUuidDto } from "./dto/verify-uuid.dto";
import { RefreshAccessTokenDto } from "./dto/refresh-access-token.dto";
import { ForgotPassword } from "./interfaces/forgot-password.interface";
import { User } from "./interfaces/user.interface";
import { EmailService } from "src/shared/services/email/email.service";
import { ResendVerificationDto } from "./dto/resend-verification.dto";
import { CreateUserServiceDto } from "./dto/create-user-service.dto";
import { RoleService } from "src/role/role.service";
import { GetUserDto } from "./dto/get-user.dto";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { UpdateUserServiceDto } from "./dto/update-user-service.dto";
export declare class UserService {
    private readonly userModel;
    private readonly forgotPasswordModel;
    private readonly authService;
    private emailService;
    private roleService;
    HOURS_TO_VERIFY: number;
    HOURS_TO_BLOCK: number;
    LOGIN_ATTEMPTS_TO_BLOCK: number;
    constructor(userModel: Model<User>, forgotPasswordModel: Model<ForgotPassword>, authService: AuthService, emailService: EmailService, roleService: RoleService);
    signup(createUserServiceDto: CreateUserServiceDto): Promise<any>;
    resendAccountVerificationEmail(resendVerificationDto: ResendVerificationDto): Promise<any>;
    verifyEmail(req: Request, verifyUuidDto: VerifyUuidDto): Promise<{
        id: any;
        fName: string;
        lName: string;
        email: string;
        RoleId: string;
        accessToken: string;
        refreshToken: string;
    }>;
    login(req: Request, loginUserDto: LoginUserDto): Promise<{
        id: any;
        fName: string;
        lName: string;
        designation: string;
        email: string;
        pNumber: number;
        lat: number;
        lng: number;
        pin: number;
        university: string;
        address: string;
        city: string;
        profilePicture: string;
        RoleId: string;
        role: any;
        OfficeId: string;
        permissions: any;
        accessToken: string;
        refreshToken: string;
    }>;
    refreshAccessToken(refreshAccessTokenDto: RefreshAccessTokenDto): Promise<{
        accessToken: string;
    }>;
    forgotPassword(req: Request, createForgotPasswordDto: CreateForgotPasswordDto): Promise<{
        email: string;
        success: number;
    }>;
    forgotPasswordVerify(req: Request, verifyUuidDto: VerifyUuidDto): Promise<{
        email: string;
        success: number;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        email: string;
        success: number;
    }>;
    changePassword(email: string, changePasswordDto: ChangePasswordDto): Promise<{
        email: string;
        success: number;
    }>;
    findUsers(getUserDto: GetUserDto): mongoose.Aggregate<any[]>;
    findUsersCount(getUserDto: GetUserDto): Promise<any>;
    findOneUser(id: string): Promise<User>;
    removeUser(id: string): Promise<import("mongodb").DeleteResult>;
    create(createUserServiceDto: CreateUserServiceDto): Promise<any>;
    update(id: string, updateUserServiceDto: UpdateUserServiceDto): Promise<boolean>;
    updateUserInfo(UserId: string, key: string, value: any): Promise<boolean>;
    private isEmailUnique;
    private setVerificationInfo;
    private isPasswordMatched;
    private resetUserPassword;
}
