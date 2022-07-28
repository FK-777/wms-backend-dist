import { HolidayService } from './holiday.service';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
export declare class HolidayController {
    private readonly holidayService;
    constructor(holidayService: HolidayService);
    create(createHolidayDto: CreateHolidayDto): Promise<import("./entities/holiday.entity").HolidayDocument>;
    findAll(): Promise<import("./entities/holiday.entity").HolidayDocument[]>;
    findOne(id: string): Promise<import("./entities/holiday.entity").HolidayDocument>;
    update(id: string, updateHolidayDto: UpdateHolidayDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
