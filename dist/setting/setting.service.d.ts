import { Model } from "mongoose";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";
import { SettingDocument } from "./entities/setting.entity";
export declare class SettingService {
    private readonly settingModel;
    constructor(settingModel: Model<SettingDocument>);
    findAll(where?: {}): Promise<SettingDocument[]>;
    findOne(id: string): Promise<SettingDocument>;
    findOneByKey(key: string): Promise<SettingDocument>;
    update(id: string, updateSettingDto: UpdateSettingDto): Promise<import("mongodb").UpdateResult>;
    createMany(records: CreateSettingDto[]): Promise<SettingDocument[]>;
    truncateCollection(): Promise<import("mongodb").DeleteResult>;
}
