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
exports.ExperienceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dentist_entity_1 = require("../primary-info/entities/dentist.entity");
const mongoose = require("mongoose");
let ExperienceService = class ExperienceService {
    constructor(DentistModel) {
        this.DentistModel = DentistModel;
    }
    async create(DentistId, experience) {
        try {
            await this.DentistModel.updateOne({ _id: DentistId }, {
                '$push': {
                    'experience': experience
                }
            });
            return "Experience created successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Failed to create experience");
        }
    }
    findAll(DentistId, getExperienceDto) {
        try {
            const dentistWhere = { _id: new mongoose.Types.ObjectId(DentistId) };
            const experienceWhere = {};
            if (getExperienceDto.s) {
                if (!dentistWhere["$or"])
                    dentistWhere["$or"] = [];
                dentistWhere["$or"].push({ fName: new RegExp(getExperienceDto.s, "i") }, { fatherName: new RegExp(getExperienceDto.s, "i") }, { nic: new RegExp(getExperienceDto.s, "i") }, { address: new RegExp(getExperienceDto.s, "i") });
            }
            if (getExperienceDto.id) {
                experienceWhere["experience._id"] = new mongoose.Types.ObjectId(getExperienceDto.id);
            }
            if (getExperienceDto.isCurrent) {
                experienceWhere['experience.isCurrent'] = getExperienceDto.isCurrent === '1' ? true : false;
            }
            return this.DentistModel.aggregate([
                { "$match": dentistWhere },
                { $unwind: "$experience" },
                { "$match": experienceWhere },
                {
                    $project: {
                        '_id': '$experience._id', 'title': '$experience.title', 'employerName': '$experience.employerName',
                        'startDate': '$experience.startDate', 'endDate': '$experience.endDate', 'isCurrent': '$experience.isCurrent',
                        'createdAt': '$experience.createdAt', 'updatedAt': '$experience.updatedAt',
                        'dentist._id': '$_id', 'dentist.fName': '$fName', 'dentist.lName': '$lName',
                    }
                },
                { $sort: { [getExperienceDto.sb]: Number(getExperienceDto.sd) } },
                { $skip: Number(getExperienceDto.o) },
                { $limit: Number(getExperienceDto.l) },
            ]);
        }
        catch (error) {
            return [];
        }
    }
    async update(DentistId, id, updateExperienceDto) {
        try {
            const updateData = {};
            for (const key in updateExperienceDto) {
                if (Object.prototype.hasOwnProperty.call(updateExperienceDto, key)) {
                    updateData["experience.$." + key] = updateExperienceDto[key];
                }
            }
            await this.DentistModel.updateOne({
                '_id': new mongoose.Types.ObjectId(DentistId),
                'experience._id': new mongoose.Types.ObjectId(id)
            }, {
                "$set": updateData
            });
            return "Record updated successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be updated");
        }
        ;
    }
    async remove(DentistId, id) {
        try {
            await this.DentistModel.updateOne({
                _id: new mongoose.Types.ObjectId(DentistId)
            }, {
                $pull: {
                    experience: {
                        _id: new mongoose.Types.ObjectId(id)
                    }
                }
            });
            return "Record deleted successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
    }
};
ExperienceService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(dentist_entity_1.Dentist.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ExperienceService);
exports.ExperienceService = ExperienceService;
//# sourceMappingURL=experience.service.js.map