import { Model } from "mongoose";
import { ResultDocument } from "src/result/entities/result.entity";
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
export declare class ResultService {
    private readonly resultModel;
    constructor(resultModel: Model<ResultDocument>);
    create(createResultDto: CreateResultDto): Promise<ResultDocument>;
    findAll(where?: {}): Promise<ResultDocument[]>;
    findOne(id: string): Promise<ResultDocument>;
    update(id: string, updateResultDto: UpdateResultDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
