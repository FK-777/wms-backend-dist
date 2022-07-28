import { Document } from "mongoose";
import * as mongoose from "mongoose";
export declare type HolidayDocument = Holiday & Document;
export declare class Holiday {
    reason: string;
    date: string;
    startDate: string;
    endDate: string;
    duration: string;
}
export declare const HolidaySchema: mongoose.Schema<Document<Holiday, any, any>, mongoose.Model<Document<Holiday, any, any>, any, any>, {}>;
