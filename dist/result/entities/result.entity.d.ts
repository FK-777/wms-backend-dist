import { Document } from "mongoose";
import * as mongoose from "mongoose";
export declare type ResultDocument = Result & Document;
export declare class Result {
    quality: string;
    volume: string;
    unitVol: string;
    quantity: string;
    unitQuan: string;
    sampleId: mongoose.Schema.Types.ObjectId;
    UserId: mongoose.Schema.Types.ObjectId;
}
export declare const ResultSchema: mongoose.Schema<Document<Result, any, any>, mongoose.Model<Document<Result, any, any>, any, any>, {}>;
