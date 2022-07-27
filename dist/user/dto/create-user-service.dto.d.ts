import { Schema as MongooseSchema } from "mongoose";
export declare class CreateUserServiceDto {
    fName: string;
    lName: string;
    deviceID: string;
    designation: string;
    officeName: string;
    email: string;
    pNumber: number;
    pin: number;
    lat: number;
    lng: number;
    university: string;
    address: string;
    city: string;
    password: string;
    RoleId: string;
    profilePicture?: string;
    OfficeId: MongooseSchema.Types.ObjectId;
}
