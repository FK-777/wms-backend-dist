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
exports.AchievementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dentist_entity_1 = require("../primary-info/entities/dentist.entity");
const mongoose = require("mongoose");
let AchievementService = class AchievementService {
    constructor(DentistModel) {
        this.DentistModel = DentistModel;
    }
    async create(DentistId, achievement) {
        try {
            await this.DentistModel.updateOne({ _id: DentistId }, {
                '$push': {
                    'achievements': achievement
                }
            });
            return "Achievement created successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Failed to create achievement");
        }
    }
    findAll(DentistId, getAchievementDto) {
        try {
            const dentistWhere = { _id: new mongoose.Types.ObjectId(DentistId) };
            const achievementsWhere = {};
            if (getAchievementDto.s) {
                if (!dentistWhere["$or"])
                    dentistWhere["$or"] = [];
                dentistWhere["$or"].push({ fName: new RegExp(getAchievementDto.s, "i") }, { fatherName: new RegExp(getAchievementDto.s, "i") }, { nic: new RegExp(getAchievementDto.s, "i") }, { address: new RegExp(getAchievementDto.s, "i") });
            }
            if (getAchievementDto.id) {
                achievementsWhere["achievements._id"] = new mongoose.Types.ObjectId(getAchievementDto.id);
            }
            return this.DentistModel.aggregate([
                { "$match": dentistWhere },
                { $unwind: "$achievements" },
                { "$match": achievementsWhere },
                {
                    $project: {
                        '_id': '$achievements._id', 'title': '$achievements.title', 'description': '$achievements.description',
                        'sate': '$achievements.sate',
                        'createdAt': '$achievements.createdAt', 'updatedAt': '$achievements.updatedAt',
                        'dentist._id': '$_id', 'dentist.fName': '$fName', 'dentist.lName': '$lName',
                    }
                },
                { $sort: { [getAchievementDto.sb]: Number(getAchievementDto.sd) } },
                { $skip: Number(getAchievementDto.o) },
                { $limit: Number(getAchievementDto.l) },
            ]);
        }
        catch (error) {
            return [];
        }
    }
    async update(DentistId, id, updateAchievementDto) {
        try {
            const updateData = {};
            for (const key in updateAchievementDto) {
                if (Object.prototype.hasOwnProperty.call(updateAchievementDto, key)) {
                    updateData["achievements.$." + key] = updateAchievementDto[key];
                }
            }
            await this.DentistModel.updateOne({
                '_id': new mongoose.Types.ObjectId(DentistId),
                'achievements._id': new mongoose.Types.ObjectId(id)
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
                    achievements: {
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
AchievementService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(dentist_entity_1.Dentist.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AchievementService);
exports.AchievementService = AchievementService;
//# sourceMappingURL=achievement.service.js.map