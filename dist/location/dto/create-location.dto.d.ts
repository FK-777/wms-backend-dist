import { Schema as MongooseSchema } from "mongoose";
export declare class CreateLocationDto {
    time: string;
    date: string;
    latitude: number;
    longitude: number;
    EmployeeId: MongooseSchema.Types.ObjectId;
    OfficeId: MongooseSchema.Types.ObjectId;
}
