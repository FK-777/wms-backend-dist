import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Model } from "mongoose";
import { ShiftDocument } from "src/shift/entities/shift.entity";
export declare class ShiftService {
    private readonly shiftModel;
    constructor(shiftModel: Model<ShiftDocument>);
    create(createShiftDto: CreateShiftDto): Promise<ShiftDocument>;
    findAll(where?: {}): Promise<ShiftDocument[]>;
    findOne(id: string): Promise<ShiftDocument>;
    update(id: string, updateShiftDto: UpdateShiftDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
