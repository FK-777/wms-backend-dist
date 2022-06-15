import { Schema as MongooseSchema } from "mongoose";
export declare class CreateUserDto {
    readonly fName: string;
    readonly lName: string;
    readonly officeName: string;
    readonly email: string;
    readonly pNumber: number;
    readonly lat: number;
    readonly lng: number;
    readonly pin: number;
    readonly university: string;
    readonly address: string;
    readonly city: string;
    readonly password: string;
    readonly role: string;
    readonly profilePicture: string;
    OfficeId: MongooseSchema.Types.ObjectId;
}
