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
exports.PractitionerController = void 0;
const common_1 = require("@nestjs/common");
const practitioner_service_1 = require("./practitioner.service");
const create_practitioner_dto_1 = require("./dto/create-practitioner.dto");
const update_practitioner_dto_1 = require("./dto/update-practitioner.dto");
const dto_1 = require("../../shared/dto");
const get_practitioner_dto_1 = require("./dto/get-practitioner.dto");
let PractitionerController = class PractitionerController {
    constructor(practitionerService) {
        this.practitionerService = practitionerService;
    }
    create(createPractitionerDto) {
        return this.practitionerService.create(createPractitionerDto);
    }
    findAll(getPractitionerDto) {
        return this.practitionerService.findAll(getPractitionerDto);
    }
    findOne({ id }) {
        return this.practitionerService.findOne(id);
    }
    update({ id }, updatePractitionerDto) {
        return this.practitionerService.update(id, updatePractitionerDto);
    }
    remove({ id }) {
        return this.practitionerService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_practitioner_dto_1.CreatePractitionerDto]),
    __metadata("design:returntype", void 0)
], PractitionerController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_practitioner_dto_1.GetPractitionerDto]),
    __metadata("design:returntype", void 0)
], PractitionerController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], PractitionerController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto, update_practitioner_dto_1.UpdatePractitionerDto]),
    __metadata("design:returntype", void 0)
], PractitionerController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], PractitionerController.prototype, "remove", null);
PractitionerController = __decorate([
    common_1.Controller('practitioner'),
    __metadata("design:paramtypes", [practitioner_service_1.PractitionerService])
], PractitionerController);
exports.PractitionerController = PractitionerController;
//# sourceMappingURL=practitioner.controller.js.map