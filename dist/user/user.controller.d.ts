/// <reference types="mongoose" />
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { Request } from "express";
import { LoginUserDto } from "./dto/login-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { VerifyUuidDto } from "./dto/verify-uuid.dto";
import { UserService } from "./user.service";
import { RefreshAccessTokenDto } from "./dto/refresh-access-token.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ResendVerificationDto } from "./dto/resend-verification.dto";
import { RoleService } from "src/role/role.service";
import { IdRequiredDto } from "src/shared/dto";
import { GetUserDto } from "./dto/get-user.dto";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { UploadService } from "src/upload/upload.service";
export declare class UserController {
    private readonly userService;
    private readonly roleService;
    private readonly uploadService;
    constructor(userService: UserService, roleService: RoleService, uploadService: UploadService);
    signup(createUserDto: CreateUserDto): Promise<any>;
    verifyEmail(req: Request, verifyUuidDto: VerifyUuidDto): Promise<{
        id: any;
        fName: string;
        lName: string;
        email: string;
        RoleId: string;
        accessToken: string;
        refreshToken: string;
    }>;
    verifyEmailSendNew(req: Request, resendVerificationDto: ResendVerificationDto): Promise<any>;
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
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(getUserDto: GetUserDto, currentUser: any): import("mongoose").Aggregate<any[]>;
    countRecords(getUserDto: GetUserDto): Promise<any>;
    changePassword(changePasswordDto: ChangePasswordDto, currentUser: any): Promise<{
        email: string;
        success: number;
    }>;
    findOne({ id }: IdRequiredDto): Promise<import("./interfaces/user.interface").User>;
    update({ id }: IdRequiredDto, updateUserDto: UpdateUserDto): Promise<boolean>;
    updateProfile(updateUserDto: UpdateUserDto, currentUser: any): Promise<boolean>;
}
