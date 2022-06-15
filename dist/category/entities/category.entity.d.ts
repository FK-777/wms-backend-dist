import { Document } from "mongoose";
import { Seo } from "src/shared/entities/seo.entity";
export declare type CategoryDocument = Category & Document;
export declare class Category {
    name: string;
    summary: string;
    description: string;
    thumbnail: string;
    priority: number;
    slug: string;
    seo: Seo;
}
export declare const CategorySchema: import("mongoose").Schema<Document<Category, any, any>, import("mongoose").Model<Document<Category, any, any>, any, any>, {}>;
