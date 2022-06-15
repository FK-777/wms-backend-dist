import { Model } from 'mongoose';
import { DentistDocument } from '../primary-info/entities/dentist.entity';
import { CreateAchievementDto, GetAchievementDto, UpdateAchievementDto } from './dto';
import * as mongoose from "mongoose";
export declare class AchievementService {
    private readonly DentistModel;
    constructor(DentistModel: Model<DentistDocument>);
    create(DentistId: string, achievement: CreateAchievementDto): Promise<string>;
    findAll(DentistId: string, getAchievementDto: GetAchievementDto): any[] | mongoose.Aggregate<any[]>;
    update(DentistId: string, id: string, updateAchievementDto: UpdateAchievementDto): Promise<string>;
    remove(DentistId: string, id: string): Promise<string>;
}
