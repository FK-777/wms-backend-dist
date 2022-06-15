import { Model } from "mongoose";
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { GetHospitalDto } from './dto/get-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { HospitalDocument } from "./entities/hospital.entity";
import { CacheService } from "src/shared/services/cache/cache.service";
export declare class HospitalService {
    private readonly HospitalModel;
    private readonly cacheService;
    constructor(HospitalModel: Model<HospitalDocument>, cacheService: CacheService);
    create(createHospitalDto: CreateHospitalDto): Promise<HospitalDocument>;
    findAll(getHospitalDto: GetHospitalDto): any[] | import("mongoose").Aggregate<any[]>;
    findOne(id: string): Promise<HospitalDocument>;
    findIdsCachedByAdminId(id: string): Promise<unknown>;
    update(id: string, updateHospitalDto: UpdateHospitalDto): Promise<string>;
    remove(id: string): Promise<string>;
}
