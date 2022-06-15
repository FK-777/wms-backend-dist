"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_entity_1 = require("./entities/category.entity");
let CategoryService = class CategoryService {
    constructor(CategoryModel) {
        this.CategoryModel = CategoryModel;
    }
    create(createCategoryDto) {
        const createCategory = new this.CategoryModel(createCategoryDto);
        return createCategory.save();
    }
    findAll(getCategoriesDto) {
        try {
            const where = {};
            if (getCategoriesDto.s) {
                if (!where["$or"])
                    where["$or"] = [];
                where["$or"].push({ name: new RegExp(getCategoriesDto.s, "i") }, { summary: new RegExp(getCategoriesDto.s, "i") });
            }
            if (getCategoriesDto.slug) {
                where['slug'] = getCategoriesDto.slug;
            }
            return this.CategoryModel.find()
                .where(where)
                .sort([[getCategoriesDto.sb, getCategoriesDto.sd]])
                .skip(Number(getCategoriesDto.o))
                .limit(Number(getCategoriesDto.l))
                .exec();
        }
        catch (error) {
            return [];
        }
    }
    findOne(id) {
        return this.CategoryModel.findById(id).exec();
    }
    async remove(id) {
        try {
            await this.CategoryModel.deleteOne({ _id: id }).exec();
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
        ;
    }
    async update(id, updateCategoryDto) {
        try {
            await this.CategoryModel.updateOne({ _id: id }, updateCategoryDto).exec();
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
        ;
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(category_entity_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map