/// <reference types="mongoose" />
import { DentistIdRequiredDto, IdRequiredDto } from 'src/shared/dto';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { GetExperienceDto } from './dto/get-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ExperienceService } from './experience.service';
export declare class ExperienceController {
    private readonly experienceService;
    constructor(experienceService: ExperienceService);
    create({ DentistId }: DentistIdRequiredDto, createExperienceDto: CreateExperienceDto): Promise<string>;
    findAll({ DentistId }: DentistIdRequiredDto, getExperienceDto: GetExperienceDto): any[] | import("mongoose").Aggregate<any[]>;
    update({ DentistId }: DentistIdRequiredDto, { id }: IdRequiredDto, updateExperienceDto: UpdateExperienceDto): Promise<string>;
    remove({ DentistId }: DentistIdRequiredDto, { id }: IdRequiredDto): Promise<string>;
}
