/// <reference types="mongoose" />
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { IdRequiredDto } from 'src/shared/dto';
import { GetHospitalDto } from './dto/get-hospital.dto';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    create(createHospitalDto: CreateHospitalDto): Promise<import("./entities/hospital.entity").HospitalDocument>;
    findAll(getHospitalDto: GetHospitalDto): any[] | import("mongoose").Aggregate<any[]>;
    findOne({ id }: IdRequiredDto): Promise<import("./entities/hospital.entity").HospitalDocument>;
    update({ id }: IdRequiredDto, updateHospitalDto: UpdateHospitalDto): Promise<string>;
    remove({ id }: IdRequiredDto): Promise<string>;
}
