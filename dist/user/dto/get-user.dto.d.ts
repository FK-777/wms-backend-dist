import { GetApiDto } from "src/shared/dto";
export declare class GetUserDto extends GetApiDto {
    email: string;
    phone: string;
    role: string;
    roleId: string;
    verified: string;
    blocked: string;
    constructor();
}
