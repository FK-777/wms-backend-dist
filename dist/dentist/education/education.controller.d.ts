/// <reference types="mongoose" />
import { DentistIdRequiredDto, IdRequiredDto } from 'src/shared/dto';
import { CreateEducationDto } from './dto/create-education.dto';
import { GetEducationDto } from './dto/get-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { EducationService } from './education.service';
export declare class EducationController {
    private readonly educationService;
    constructor(educationService: EducationService);
    create({ DentistId }: DentistIdRequiredDto, createEducationDto: CreateEducationDto): Promise<string>;
    findAll({ DentistId }: DentistIdRequiredDto, getEducationDto: GetEducationDto): any[] | import("mongoose").Aggregate<any[]>;
    update({ DentistId }: DentistIdRequiredDto, { id }: IdRequiredDto, updateEducationDto: UpdateEducationDto): Promise<string>;
    remove({ DentistId }: DentistIdRequiredDto, { id }: IdRequiredDto): Promise<string>;
}
