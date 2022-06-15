import { Schema as MongooseSchema } from "mongoose";
export declare class CreateResultDto {
    quality: string;
    volume: string;
    unitVol: string;
    quantity: string;
    unitQuan: string;
    sampleId: MongooseSchema.Types.ObjectId;
    UserId: MongooseSchema.Types.ObjectId;
}
