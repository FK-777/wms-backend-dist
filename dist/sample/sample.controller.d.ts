import { SampleService } from "./sample.service";
import { CreateSampleDto } from "./dto/create-sample.dto";
import { UpdateSampleDto } from "./dto/update-sample.dto";
export declare class SampleController {
    private readonly sampleService;
    constructor(sampleService: SampleService);
    create(createSampleDto: CreateSampleDto): Promise<import("./entities/sample.entity").SampleDocument>;
    findAll(): Promise<import("./entities/sample.entity").SampleDocument[]>;
    findOne(id: string): Promise<import("./entities/sample.entity").SampleDocument>;
    update(id: string, updateSampleDto: UpdateSampleDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
