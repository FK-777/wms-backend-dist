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
exports.EducationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dentist_entity_1 = require("../primary-info/entities/dentist.entity");
const mongoose = require("mongoose");
let EducationService = class EducationService {
    constructor(DentistModel) {
        this.DentistModel = DentistModel;
    }
    async create(DentistId, education) {
        try {
            await this.DentistModel.updateOne({ _id: DentistId }, {
                '$push': {
                    'education': education
                }
            });
            return "Education created successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Failed to create education");
        }
    }
    findAll(DentistId, getEducationDto) {
        try {
            const dentistWhere = { _id: new mongoose.Types.ObjectId(DentistId) };
            const educationWhere = {};
            if (getEducationDto.s) {
                if (!dentistWhere["$or"])
                    dentistWhere["$or"] = [];
                dentistWhere["$or"].push({ fName: new RegExp(getEducationDto.s, "i") }, { fatherName: new RegExp(getEducationDto.s, "i") }, { nic: new RegExp(getEducationDto.s, "i") }, { address: new RegExp(getEducationDto.s, "i") });
            }
            if (getEducationDto.id) {
                educationWhere["education._id"] = new mongoose.Types.ObjectId(getEducationDto.id);
            }
            if (getEducationDto.title) {
                educationWhere["education.title"] = getEducationDto.title;
            }
            return this.DentistModel.aggregate([
                { "$match": dentistWhere },
                { $unwind: "$education" },
                { "$match": educationWhere },
                {
                    $project: {
                        '_id': '$education._id', 'title': '$education.title', 'description': '$education.description',
                        'totalMarks': '$education.totalMarks', 'obtainedMarks': '$education.obtainedMarks', 'startDate': '$education.startDate',
                        'endDate': '$education.endDate', 'isCurrent': '$education.isCurrent',
                        'createdAt': '$education.createdAt', 'updatedAt': '$education.updatedAt',
                        'dentist._id': '$_id', 'dentist.fName': '$fName', 'dentist.lName': '$lName',
                    }
                },
                { $sort: { [getEducationDto.sb]: Number(getEducationDto.sd) } },
                { $skip: Number(getEducationDto.o) },
                { $limit: Number(getEducationDto.l) },
            ]);
        }
        catch (error) {
            return [];
        }
    }
    async update(DentistId, id, updateEducationDto) {
        try {
            const updateData = {};
            for (const key in updateEducationDto) {
                if (Object.prototype.hasOwnProperty.call(updateEducationDto, key)) {
                    updateData["education.$." + key] = updateEducationDto[key];
                }
            }
            await this.DentistModel.updateOne({
                '_id': new mongoose.Types.ObjectId(DentistId),
                'education._id': new mongoose.Types.ObjectId(id)
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
                    education: {
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
EducationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(dentist_entity_1.Dentist.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EducationService);
exports.EducationService = EducationService;
//# sourceMappingURL=education.service.js.map