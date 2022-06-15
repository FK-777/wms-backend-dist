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
exports.ExperienceController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../../shared/dto");
const create_experience_dto_1 = require("./dto/create-experience.dto");
const get_experience_dto_1 = require("./dto/get-experience.dto");
const update_experience_dto_1 = require("./dto/update-experience.dto");
const experience_service_1 = require("./experience.service");
let ExperienceController = class ExperienceController {
    constructor(experienceService) {
        this.experienceService = experienceService;
    }
    create({ DentistId }, createExperienceDto) {
        return this.experienceService.create(DentistId, createExperienceDto);
    }
    findAll({ DentistId }, getExperienceDto) {
        return this.experienceService.findAll(DentistId, getExperienceDto);
    }
    update({ DentistId }, { id }, updateExperienceDto) {
        if (Object.keys(updateExperienceDto).length == 0) {
            throw new common_1.BadRequestException("Please provide data to update");
        }
        return this.experienceService.update(DentistId, id, updateExperienceDto);
    }
    remove({ DentistId }, { id }) {
        return this.experienceService.remove(DentistId, id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, create_experience_dto_1.CreateExperienceDto]),
    __metadata("design:returntype", void 0)
], ExperienceController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Param()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, get_experience_dto_1.GetExperienceDto]),
    __metadata("design:returntype", void 0)
], ExperienceController.prototype, "findAll", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, dto_1.IdRequiredDto, update_experience_dto_1.UpdateExperienceDto]),
    __metadata("design:returntype", void 0)
], ExperienceController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, dto_1.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], ExperienceController.prototype, "remove", null);
ExperienceController = __decorate([
    common_1.Controller('experience/dentist/:DentistId'),
    __metadata("design:paramtypes", [experience_service_1.ExperienceService])
], ExperienceController);
exports.ExperienceController = ExperienceController;
//# sourceMappingURL=experience.controller.js.map