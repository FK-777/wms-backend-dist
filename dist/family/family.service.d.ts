import { Model } from "mongoose";
import { FamilyDocument } from "src/family/entities/family.entity";
import { CreateFamilyDto } from "src/family/dto/create-family.dto";
import { UpdateFamilyDto } from "src/family/dto/update-family.dto";
export declare class FamilyService {
    private readonly familyModel;
    constructor(familyModel: Model<FamilyDocument>);
    create(createFamilyDto: CreateFamilyDto): Promise<FamilyDocument>;
    findAll(where?: {}): Promise<FamilyDocument[]>;
    findOne(id: string): Promise<FamilyDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    update(id: string, updateFamilyDto: UpdateFamilyDto): Promise<import("mongodb").UpdateResult>;
}
