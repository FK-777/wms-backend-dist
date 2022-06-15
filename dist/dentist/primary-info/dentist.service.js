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
exports.DentistService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dentist_entity_1 = require("./entities/dentist.entity");
let DentistService = class DentistService {
    constructor(DentistModel) {
        this.DentistModel = DentistModel;
    }
    create(createDentistDto) {
        const createCategory = new this.DentistModel(createDentistDto);
        return createCategory.save();
    }
    findAll(getDentistDto) {
        try {
            const where = {};
            if (getDentistDto.s) {
                if (!where["$or"])
                    where["$or"] = [];
                where["$or"].push({ fName: new RegExp(getDentistDto.s, "i") }, { lName: new RegExp(getDentistDto.s, "i") }, { address: new RegExp(getDentistDto.s, "i") });
            }
            if (getDentistDto.city) {
                where['CityId'] = getDentistDto.city;
            }
            return this.DentistModel.find()
                .where(where)
                .sort([[getDentistDto.sb, getDentistDto.sd]])
                .skip(Number(getDentistDto.o))
                .limit(Number(getDentistDto.l))
                .exec();
        }
        catch (error) {
            return [];
        }
    }
    async findOne(id) {
        try {
            return await this.DentistModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.BadRequestException("The id is invalid");
        }
        ;
    }
    async update(id, updateDentistDto) {
        try {
            await this.DentistModel.updateOne({ _id: id }, updateDentistDto).exec();
            return "Record updated successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be updated");
        }
        ;
    }
    async remove(id) {
        try {
            await this.DentistModel.deleteOne({ _id: id }).exec();
            return "Record deleted successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
        ;
    }
};
DentistService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(dentist_entity_1.Dentist.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DentistService);
exports.DentistService = DentistService;
//# sourceMappingURL=dentist.service.js.map