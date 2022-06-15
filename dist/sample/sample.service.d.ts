import { Model } from "mongoose";
import { SampleDocument } from "src/sample/entities/sample.entity";
import { CreateSampleDto } from "src/sample/dto/create-sample.dto";
import { UpdateSampleDto } from "src/sample/dto/update-sample.dto";
export declare class SampleService {
    private readonly sampleModel;
    constructor(sampleModel: Model<SampleDocument>);
    create(createSampleDto: CreateSampleDto): Promise<SampleDocument>;
    findAll(where?: {}): Promise<SampleDocument[]>;
    findOne(id: string): Promise<SampleDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    update(id: string, updateSampleDto: UpdateSampleDto): Promise<import("mongodb").UpdateResult>;
}
