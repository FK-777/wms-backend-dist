/// <reference types="mongoose" />
import { PractitionerService } from './practitioner.service';
import { CreatePractitionerDto } from './dto/create-practitioner.dto';
import { UpdatePractitionerDto } from './dto/update-practitioner.dto';
import { IdRequiredDto } from 'src/shared/dto';
import { GetPractitionerDto } from './dto/get-practitioner.dto';
export declare class PractitionerController {
    private readonly practitionerService;
    constructor(practitionerService: PractitionerService);
    create(createPractitionerDto: CreatePractitionerDto): Promise<import("./entities/practitioner.entity").PractitionerDocument>;
    findAll(getPractitionerDto: GetPractitionerDto): any[] | import("mongoose").Aggregate<any[]>;
    findOne({ id }: IdRequiredDto): Promise<import("./entities/practitioner.entity").PractitionerDocument>;
    update({ id }: IdRequiredDto, updatePractitionerDto: UpdatePractitionerDto): Promise<string>;
    remove({ id }: IdRequiredDto): Promise<string>;
}
