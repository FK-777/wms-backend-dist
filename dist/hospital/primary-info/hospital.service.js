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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hospital_entity_1 = require("./entities/hospital.entity");
const cache_service_1 = require("../../shared/services/cache/cache.service");
let HospitalService = class HospitalService {
    constructor(HospitalModel, cacheService) {
        this.HospitalModel = HospitalModel;
        this.cacheService = cacheService;
    }
    create(createHospitalDto) {
        try {
            const createHospital = new this.HospitalModel(createHospitalDto);
            return createHospital.save();
        }
        catch (error) {
            throw new common_1.BadRequestException("Failed to create hospital");
        }
    }
    findAll(getHospitalDto) {
        try {
            const where = { isDeleted: false };
            if (getHospitalDto.s) {
                if (!where["$or"])
                    where["$or"] = [];
                where["$or"].push({ name: new RegExp(getHospitalDto.s, "i") });
            }
            if (getHospitalDto.CityId) {
                where["CityId"] = new mongoose_2.Types.ObjectId(getHospitalDto.CityId);
            }
            if (getHospitalDto.CategoryId) {
                where["CategoryId"] = new mongoose_2.Types.ObjectId(getHospitalDto.CategoryId);
            }
            if (getHospitalDto.AdminId) {
                where["AdminId"] = new mongoose_2.Types.ObjectId(getHospitalDto.AdminId);
            }
            return this.HospitalModel.aggregate([
                { "$match": where },
                {
                    $lookup: {
                        from: "categories",
                        localField: "CategoryIds",
                        foreignField: "_id",
                        as: "category"
                    }
                },
                {
                    $lookup: {
                        from: "cities",
                        localField: "CityId",
                        foreignField: "_id",
                        as: "city"
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        as: "admin",
                        let: { adminId: "$AdminId" },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ["$_id", "$$adminId"] }
                                },
                            },
                            { $project: { "_id": 1, "fName": 1, "lName": 1, "email": 1 } }
                        ]
                    }
                },
                { $unwind: "$city" },
                { $unwind: "$admin" },
                {
                    $project: {
                        "_id": 1,
                        "address": 1,
                        "name": 1,
                        "createdAt": 1,
                        "updatedAt": 1,
                        "category._id": 1,
                        "category.name": 1,
                        "city._id": 1,
                        "city.name": 1,
                        "admin._id": 1,
                        "admin.fName": 1,
                        "admin.lName": 1,
                        "admin.email": 1
                    }
                },
                { $sort: { [getHospitalDto.sb]: Number(getHospitalDto.sd) } },
                { $skip: Number(getHospitalDto.o) },
                { $limit: Number(getHospitalDto.l) },
            ]);
        }
        catch (error) {
            return [];
        }
    }
    findOne(id) {
        return this.HospitalModel.findById(id).exec();
    }
    async findIdsCachedByAdminId(id) {
        try {
            let ids = await this.cacheService.get("hospitalAdmin" + id);
            if (!ids) {
                let hospitals = await this.HospitalModel.find().where({ AdminId: id });
                ids = hospitals.map(institute => institute._id.toString());
                await this.cacheService.set("hospitalAdmin" + id, ids);
            }
            return ids;
        }
        catch (error) {
            throw new common_1.BadRequestException("The id is invalid");
        }
        ;
    }
    async update(id, updateHospitalDto) {
        try {
            if (Object.keys(updateHospitalDto).length == 0) {
                throw new common_1.BadRequestException("Please provide data to update");
            }
            await this.HospitalModel.updateOne({ _id: id }, updateHospitalDto).exec();
            return "Record updated successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be updated");
        }
        ;
    }
    async remove(id) {
        try {
            await this.HospitalModel.updateOne({ _id: id }, { isDeleted: true }).exec();
            return "Record deleted successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
    }
};
HospitalService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(hospital_entity_1.Hospital.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cache_service_1.CacheService])
], HospitalService);
exports.HospitalService = HospitalService;
//# sourceMappingURL=hospital.service.js.map