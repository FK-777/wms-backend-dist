import { Model } from "mongoose";
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { LeaveDocument } from "src/leave/entities/leave.entity";
export declare class LeaveService {
    private readonly leaveModel;
    constructor(leaveModel: Model<LeaveDocument>);
    create(createLeaveDto: CreateLeaveDto): Promise<LeaveDocument>;
    findAll(where?: {}): Promise<LeaveDocument[]>;
    findOne(id: string): Promise<LeaveDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    update(id: string, updateLeaveDto: UpdateLeaveDto): Promise<import("mongodb").UpdateResult>;
}
