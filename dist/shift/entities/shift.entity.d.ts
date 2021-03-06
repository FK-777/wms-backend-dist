import { Document } from "mongoose";
import * as mongoose from "mongoose";
export declare type ShiftDocument = Shift & Document;
export declare class Shift {
    name: string;
    startTime: string;
    endTime: string;
}
export declare const ShiftSchema: mongoose.Schema<Document<Shift, any, any>, mongoose.Model<Document<Shift, any, any>, any, any>, {}>;
