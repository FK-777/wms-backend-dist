import { Document } from "mongoose";
import { Schema as MongooseSchema } from "mongoose";
import { DaySchedule } from "src/shared/entities/day-schedule.entity";
export declare type PractitionerDocument = Practitioner & Document;
export declare class Practitioner {
    DentistId: MongooseSchema.Types.ObjectId;
    HospitalId: MongooseSchema.Types.ObjectId;
    schedule: Array<DaySchedule>;
    createdBy: string;
    startDate: Date;
    endDate: Date;
    approvedBy: string;
    deletedBy: string;
    isDeleted: boolean;
}
export declare const PractitionerSchema: MongooseSchema<Document<Practitioner, any, any>, import("mongoose").Model<Document<Practitioner, any, any>, any, any>, {}>;
