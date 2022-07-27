import { Schema as MongooseSchema } from "mongoose";
export declare class CreateLeaveDto {
    leaveType: string;
    startDate: Date;
    endDate: Date;
    date: string;
    reason: string;
    status: string;
    EmployeeId: MongooseSchema.Types.ObjectId;
    OfficeId: MongooseSchema.Types.ObjectId;
}
