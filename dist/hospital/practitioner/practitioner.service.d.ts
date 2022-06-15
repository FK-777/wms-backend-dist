import { Model } from "mongoose";
import { CreatePractitionerDto } from './dto/create-practitioner.dto';
import { GetPractitionerDto } from './dto/get-practitioner.dto';
import { UpdatePractitionerDto } from './dto/update-practitioner.dto';
import { PractitionerDocument } from './entities/practitioner.entity';
export declare class PractitionerService {
    private readonly PractitionerModel;
    constructor(PractitionerModel: Model<PractitionerDocument>);
    create(createPractitionerDto: CreatePractitionerDto): Promise<PractitionerDocument>;
    findAll(getPractitionerDto: GetPractitionerDto): any[] | import("mongoose").Aggregate<any[]>;
    findOne(id: string): Promise<PractitionerDocument>;
    update(id: string, updatePractitionerDto: UpdatePractitionerDto): Promise<string>;
    remove(id: string): Promise<string>;
}
