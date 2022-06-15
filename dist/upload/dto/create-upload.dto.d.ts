import { Schema as MongooseSchema } from "mongoose";
export declare class CreateUploadDto {
    name: string;
    key: string;
    location: string;
    type: string;
    access: string;
    CreatedBy: MongooseSchema.Types.ObjectId;
}
