import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
export declare class ShiftController {
    private readonly shiftService;
    constructor(shiftService: ShiftService);
    create(createShiftDto: CreateShiftDto): Promise<import("./entities/shift.entity").ShiftDocument>;
    findAll(): Promise<import("./entities/shift.entity").ShiftDocument[]>;
    findOne(id: string): Promise<import("./entities/shift.entity").ShiftDocument>;
    update(id: string, updateShiftDto: UpdateShiftDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
