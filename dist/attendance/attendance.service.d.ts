import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Model } from "mongoose";
import { AttendanceDocument } from "src/attendance/entities/attendance.entity";
export declare class AttendanceService {
    private readonly attendanceModel;
    constructor(attendanceModel: Model<AttendanceDocument>);
    create(createAttendanceDto: CreateAttendanceDto): Promise<AttendanceDocument>;
    findAll(where?: {}): Promise<AttendanceDocument[]>;
    findOne(id: string): Promise<AttendanceDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    update(id: string, updateAttendanceDto: UpdateAttendanceDto): Promise<import("mongodb").UpdateResult>;
}
