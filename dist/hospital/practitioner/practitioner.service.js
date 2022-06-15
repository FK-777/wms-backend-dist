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
exports.PractitionerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const practitioner_entity_1 = require("./entities/practitioner.entity");
let PractitionerService = class PractitionerService {
    constructor(PractitionerModel) {
        this.PractitionerModel = PractitionerModel;
    }
    create(createPractitionerDto) {
        try {
            const createPractitioner = new this.PractitionerModel(createPractitionerDto);
            return createPractitioner.save();
        }
        catch (error) {
            throw new common_1.BadRequestException("Failed to create hospital");
        }
    }
    findAll(getPractitionerDto) {
        try {
            const where = { isDeleted: false };
            if (getPractitionerDto.DentistId) {
                where["DentistId"] = new mongoose_2.Types.ObjectId(getPractitionerDto.DentistId);
            }
            if (getPractitionerDto.HospitalId) {
                where["HospitalId"] = new mongoose_2.Types.ObjectId(getPractitionerDto.HospitalId);
            }
            if (getPractitionerDto.approvedBy) {
                where["approvedBy"] = getPractitionerDto.approvedBy;
            }
            if (getPractitionerDto.createdBy) {
                where["createdBy"] = getPractitionerDto.createdBy;
            }
            if (getPractitionerDto.deletedBy) {
                where["deletedBy"] = getPractitionerDto.deletedBy;
            }
            return this.PractitionerModel.aggregate([
                { "$match": where },
                {
                    $lookup: {
                        from: "hospitals",
                        as: "hospital",
                        let: { hospitalId: "$HospitalId" },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ["$_id", "$$hospitalId"] }
                                },
                            },
                            { $project: { "_id": 1, "name": 1, "thumbnail": 1 } }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "dentists",
                        as: "dentist",
                        let: { dentistId: "$DentistId" },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ["$_id", "$$dentistId"] }
                                },
                            },
                            { $project: { "_id": 1, "fName": 1, "lName": 1, "profilePicture": 1 } }
                        ]
                    }
                },
                { $unwind: "$hospital" },
                { $unwind: "$dentist" },
                {
                    $project: {
                        "isDeleted": 0,
                    }
                },
                { $sort: { [getPractitionerDto.sb]: Number(getPractitionerDto.sd) } },
                { $skip: Number(getPractitionerDto.o) },
                { $limit: Number(getPractitionerDto.l) },
            ]);
        }
        catch (error) {
            return [];
        }
    }
    findOne(id) {
        return this.PractitionerModel.findOne({ _id: id, isDeleted: false }).select({ isDeleted: 0 }).populate("HospitalId").populate("DentistId").exec();
    }
    async update(id, updatePractitionerDto) {
        try {
            if (Object.keys(updatePractitionerDto).length == 0) {
                throw new common_1.BadRequestException("Please provide data to update");
            }
            await this.PractitionerModel.updateOne({ _id: id }, updatePractitionerDto).exec();
            return "Record updated successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be updated");
        }
        ;
    }
    async remove(id) {
        try {
            await this.PractitionerModel.updateOne({ _id: id }, { isDeleted: true }).exec();
            return "Record deleted successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
    }
};
PractitionerService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(practitioner_entity_1.Practitioner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PractitionerService);
exports.PractitionerService = PractitionerService;
//# sourceMappingURL=practitioner.service.js.map