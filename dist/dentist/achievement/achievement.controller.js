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
exports.AchievementController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const achievement_service_1 = require("./achievement.service");
const dto_2 = require("../../shared/dto");
let AchievementController = class AchievementController {
    constructor(achievementService) {
        this.achievementService = achievementService;
    }
    create({ DentistId }, createAchievementDto) {
        return this.achievementService.create(DentistId, createAchievementDto);
    }
    findAll({ DentistId }, getAchievementDto) {
        return this.achievementService.findAll(DentistId, getAchievementDto);
    }
    update({ DentistId }, { id }, updateAchievementDto) {
        if (Object.keys(updateAchievementDto).length == 0) {
            throw new common_1.BadRequestException("Please provide data to update");
        }
        return this.achievementService.update(DentistId, id, updateAchievementDto);
    }
    remove({ DentistId }, { id }) {
        return this.achievementService.remove(DentistId, id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.DentistIdRequiredDto, dto_1.CreateAchievementDto]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Param()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.DentistIdRequiredDto, dto_1.GetAchievementDto]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "findAll", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.DentistIdRequiredDto, dto_2.IdRequiredDto, dto_1.UpdateAchievementDto]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.DentistIdRequiredDto, dto_2.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "remove", null);
AchievementController = __decorate([
    common_1.Controller('achievement/dentist/:DentistId'),
    __metadata("design:paramtypes", [achievement_service_1.AchievementService])
], AchievementController);
exports.AchievementController = AchievementController;
//# sourceMappingURL=achievement.controller.js.map