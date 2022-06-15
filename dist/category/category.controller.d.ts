import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { GetCategoriesDto } from "./dto/get-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { IdRequiredDto } from "src/shared/dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./entities/category.entity").CategoryDocument>;
    findAll(getCategoriesDto: GetCategoriesDto, currentUser: any): any[] | Promise<import("./entities/category.entity").CategoryDocument[]>;
    findOne({ id }: IdRequiredDto): Promise<import("./entities/category.entity").CategoryDocument>;
    update({ id }: IdRequiredDto, updateCategoryDto: UpdateCategoryDto): Promise<boolean>;
    remove({ id }: IdRequiredDto): Promise<boolean>;
}
