import { Model } from 'mongoose';
import { DentistDocument } from '../primary-info/entities/dentist.entity';
import { CreateEducationDto } from './dto/create-education.dto';
import { GetEducationDto } from './dto/get-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import * as mongoose from "mongoose";
export declare class EducationService {
    private readonly DentistModel;
    constructor(DentistModel: Model<DentistDocument>);
    create(DentistId: string, education: CreateEducationDto): Promise<string>;
    findAll(DentistId: string, getEducationDto: GetEducationDto): any[] | mongoose.Aggregate<any[]>;
    update(DentistId: string, id: string, updateEducationDto: UpdateEducationDto): Promise<string>;
    remove(DentistId: string, id: string): Promise<string>;
}
