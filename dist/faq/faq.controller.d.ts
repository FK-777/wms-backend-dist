import { FaqService } from "./faq.service";
import { CreateFaqDto } from "./dto/create-faq.dto";
import { UpdateFaqDto } from "./dto/update-faq.dto";
export declare class FaqController {
    private readonly faqService;
    constructor(faqService: FaqService);
    create(createFaqDto: CreateFaqDto): Promise<import("./entities/faq.entity").FaqDocument>;
    findAll(): Promise<import("./entities/faq.entity").FaqDocument[]>;
    findOne(id: string): Promise<import("./entities/faq.entity").FaqDocument>;
    update(id: string, updateFaqDto: UpdateFaqDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
