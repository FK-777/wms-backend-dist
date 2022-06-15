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
exports.EducationController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../../shared/dto");
const create_education_dto_1 = require("./dto/create-education.dto");
const get_education_dto_1 = require("./dto/get-education.dto");
const update_education_dto_1 = require("./dto/update-education.dto");
const education_service_1 = require("./education.service");
let EducationController = class EducationController {
    constructor(educationService) {
        this.educationService = educationService;
    }
    create({ DentistId }, createEducationDto) {
        return this.educationService.create(DentistId, createEducationDto);
    }
    findAll({ DentistId }, getEducationDto) {
        return this.educationService.findAll(DentistId, getEducationDto);
    }
    update({ DentistId }, { id }, updateEducationDto) {
        if (Object.keys(updateEducationDto).length == 0) {
            throw new common_1.BadRequestException("Please provide data to update");
        }
        return this.educationService.update(DentistId, id, updateEducationDto);
    }
    remove({ DentistId }, { id }) {
        return this.educationService.remove(DentistId, id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, create_education_dto_1.CreateEducationDto]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Param()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, get_education_dto_1.GetEducationDto]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "findAll", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, dto_1.IdRequiredDto, update_education_dto_1.UpdateEducationDto]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DentistIdRequiredDto, dto_1.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "remove", null);
EducationController = __decorate([
    common_1.Controller('education/dentist/:DentistId'),
    __metadata("design:paramtypes", [education_service_1.EducationService])
], EducationController);
exports.EducationController = EducationController;
//# sourceMappingURL=education.controller.js.map