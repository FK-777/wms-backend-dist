import { Schema as MongooseSchema } from "mongoose";
import { DayScheduleDto } from "src/shared/dto/day-schedule.dto";
export declare class CreatePractitionerDto {
    DentistId: MongooseSchema.Types.ObjectId;
    HospitalId: MongooseSchema.Types.ObjectId;
    schedule: Array<DayScheduleDto>;
    createdBy: string;
    removedBy: string;
    startDate: Date;
    endDate: Date;
    approvedBy: string;
}
