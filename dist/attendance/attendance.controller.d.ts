import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(createAttendanceDto: CreateAttendanceDto): Promise<import("./entities/attendance.entity").AttendanceDocument>;
    findAll(): Promise<import("./entities/attendance.entity").AttendanceDocument[]>;
    findOne(id: string): Promise<import("./entities/attendance.entity").AttendanceDocument>;
    update(id: string, updateAttendanceDto: UpdateAttendanceDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
