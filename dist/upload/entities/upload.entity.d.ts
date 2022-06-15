import { Schema as MongooseSchema } from "mongoose";
export declare type UploadTempDocument = UploadTemp & Document;
export declare class UploadTemp {
    name: string;
    key: string;
    location: string;
    type: string;
    access: string;
    sizes: string[];
    module: string;
    inUse: boolean;
    CreatedBy: MongooseSchema.Types.ObjectId;
}
export declare const UploadTempSchema: MongooseSchema<import("mongoose").Document<UploadTemp, any, any>, import("mongoose").Model<import("mongoose").Document<UploadTemp, any, any>, any, any>, {}>;
