import { SettingService } from "./setting.service";
import { UpdateSettingDto } from "./dto/update-setting.dto";
export declare class SettingController {
    private readonly settingService;
    constructor(settingService: SettingService);
    findAll(): Promise<import("./entities/setting.entity").SettingDocument[]>;
    findOne(key: string): Promise<import("./entities/setting.entity").SettingDocument>;
    update(id: string, updateSettingDto: UpdateSettingDto): Promise<import("mongodb").UpdateResult>;
}
