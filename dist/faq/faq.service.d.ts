import { Model } from "mongoose";
import { CreateFaqDto } from "./dto/create-faq.dto";
import { UpdateFaqDto } from "./dto/update-faq.dto";
import { FaqDocument } from "./entities/faq.entity";
export declare class FaqService {
    private readonly faqModel;
    constructor(faqModel: Model<FaqDocument>);
    create(createFaqDto: CreateFaqDto): Promise<FaqDocument>;
    findAll(where?: {}): Promise<FaqDocument[]>;
    findOne(id: string): Promise<FaqDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    update(id: string, updateFaqDto: UpdateFaqDto): Promise<import("mongodb").UpdateResult>;
}
