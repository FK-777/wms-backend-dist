import { Schema as MongooseSchema } from "mongoose";
export declare class CreateLeaveDto {
    leaveType: string;
    startDate: string;
    endDate: string;
    date: string;
    reason: string;
    status: string;
    EmployeeId: MongooseSchema.Types.ObjectId;
    OfficeId: MongooseSchema.Types.ObjectId;
}
