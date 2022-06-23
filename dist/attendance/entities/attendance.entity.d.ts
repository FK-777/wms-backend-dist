import { Document } from "mongoose";
import * as mongoose from "mongoose";
export declare type AttendanceDocument = Attendance & Document;
export declare class Attendance {
    inTime: string;
    outTime: string;
    date: string;
    day: number;
    month: number;
    lat: number;
    lng: number;
    status: string;
    isVerified: boolean;
    entery: string;
    location: string;
    EmployeeId: mongoose.Schema.Types.ObjectId;
    OfficeId: mongoose.Schema.Types.ObjectId;
}
export declare const AttendanceSchema: mongoose.Schema<Document<Attendance, any, any>, mongoose.Model<Document<Attendance, any, any>, any, any>, {}>;
