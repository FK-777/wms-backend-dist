import { Model } from 'mongoose';
import { DentistDocument } from '../primary-info/entities/dentist.entity';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { GetExperienceDto } from './dto/get-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import * as mongoose from "mongoose";
export declare class ExperienceService {
    private readonly DentistModel;
    constructor(DentistModel: Model<DentistDocument>);
    create(DentistId: string, experience: CreateExperienceDto): Promise<string>;
    findAll(DentistId: string, getExperienceDto: GetExperienceDto): any[] | mongoose.Aggregate<any[]>;
    update(DentistId: string, id: string, updateExperienceDto: UpdateExperienceDto): Promise<string>;
    remove(DentistId: string, id: string): Promise<string>;
}
