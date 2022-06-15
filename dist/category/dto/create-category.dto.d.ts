import { SeoDto } from "src/shared/dto/seo.dto";
export declare class CreateCategoryDto {
    name: string;
    summary: string;
    description: string;
    thumbnail: string;
    priority: number;
    slug: string;
    seo: SeoDto;
}
