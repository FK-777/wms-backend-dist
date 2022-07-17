import { Document } from "mongoose";
import * as mongoose from "mongoose";
export declare type LocationDocument = Location & Document;
export declare class Location {
    time: string;
    date: string;
    latitude: number;
    longitude: number;
    EmployeeId: mongoose.Schema.Types.ObjectId;
    OfficeId: mongoose.Schema.Types.ObjectId;
}
export declare const LocationSchema: mongoose.Schema<Document<Location, any, any>, mongoose.Model<Document<Location, any, any>, any, any>, {}>;
