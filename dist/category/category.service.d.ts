import { Model } from "mongoose";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { GetCategoriesDto } from "./dto/get-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CategoryDocument } from "./entities/category.entity";
export declare class CategoryService {
    private readonly CategoryModel;
    constructor(CategoryModel: Model<CategoryDocument>);
    create(createCategoryDto: CreateCategoryDto): Promise<CategoryDocument>;
    findAll(getCategoriesDto: GetCategoriesDto): any[] | Promise<CategoryDocument[]>;
    findOne(id: string): Promise<CategoryDocument>;
    remove(id: string): Promise<boolean>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<boolean>;
}
