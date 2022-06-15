import { FamilyService } from "./family.service";
import { CreateFamilyDto } from "./dto/create-family.dto";
import { UpdateFamilyDto } from "./dto/update-family.dto";
export declare class FamilyController {
    private readonly familyService;
    constructor(familyService: FamilyService);
    create(createFamilyDto: CreateFamilyDto): Promise<import("./entities/family.entity").FamilyDocument>;
    findAll(): Promise<import("./entities/family.entity").FamilyDocument[]>;
    findOne(id: string): Promise<import("./entities/family.entity").FamilyDocument>;
    update(id: string, updateFamilyDto: UpdateFamilyDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
