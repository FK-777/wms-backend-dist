import { Schema as MongooseSchema } from "mongoose";
export declare class CreateAttendanceDto {
    inTime: string;
    outTime: string;
    date: string;
    day: number;
    month: number;
    lat: number;
    lng: number;
    status: string;
    entery: string;
    location: string;
    isVerified: boolean;
    EmployeeId: MongooseSchema.Types.ObjectId;
    OfficeId: MongooseSchema.Types.ObjectId;
}
