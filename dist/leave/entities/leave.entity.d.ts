import { Document } from "mongoose";
import * as mongoose from "mongoose";
export declare type LeaveDocument = Leave & Document;
export declare class Leave {
    leaveType: string;
    startDate: string;
    endDate: string;
    date: string;
    reason: string;
    status: string;
    EmployeeId: mongoose.Schema.Types.ObjectId;
    OfficeId: mongoose.Schema.Types.ObjectId;
}
export declare const LeaveSchema: mongoose.Schema<Document<Leave, any, any>, mongoose.Model<Document<Leave, any, any>, any, any>, {}>;
