import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
export declare class ResultController {
    private readonly resultService;
    constructor(resultService: ResultService);
    create(createResultDto: CreateResultDto): Promise<import("./entities/result.entity").ResultDocument>;
    findAll(): Promise<import("./entities/result.entity").ResultDocument[]>;
    findOne(id: string): Promise<import("./entities/result.entity").ResultDocument>;
    update(id: string, updateResultDto: UpdateResultDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
