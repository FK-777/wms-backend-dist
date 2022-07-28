import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { Model } from "mongoose";
import { HolidayDocument } from "src/holiday/entities/holiday.entity";
export declare class HolidayService {
    private readonly holidayModel;
    constructor(holidayModel: Model<HolidayDocument>);
    create(createHolidayDto: CreateHolidayDto): Promise<HolidayDocument>;
    findAll(where?: {}): Promise<HolidayDocument[]>;
    findOne(id: string): Promise<HolidayDocument>;
    update(id: string, updateHolidayDto: UpdateHolidayDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
