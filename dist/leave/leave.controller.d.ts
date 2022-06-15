import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
export declare class LeaveController {
    private readonly leaveService;
    constructor(leaveService: LeaveService);
    create(createLeaveDto: CreateLeaveDto): Promise<import("./entities/leave.entity").LeaveDocument>;
    findAll(): Promise<import("./entities/leave.entity").LeaveDocument[]>;
    findOne(id: string): Promise<import("./entities/leave.entity").LeaveDocument>;
    update(id: string, updateLeaveDto: UpdateLeaveDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
