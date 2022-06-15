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
exports.DentistController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../../shared/dto");
const util_service_1 = require("../../shared/services/util/util.service");
const dentist_service_1 = require("./dentist.service");
const create_dentist_dto_1 = require("./dto/create-dentist.dto");
const get_dentist_dto_1 = require("./dto/get-dentist.dto");
const update_dentist_dto_1 = require("./dto/update-dentist.dto");
let DentistController = class DentistController {
    constructor(dentistService) {
        this.dentistService = dentistService;
    }
    create(createDentistDto) {
        createDentistDto.slug = util_service_1.UtilService.createSlug(createDentistDto.fName + " " + createDentistDto.lName);
        return this.dentistService.create(createDentistDto);
    }
    findAll(getDentistDto) {
        return this.dentistService.findAll(getDentistDto);
    }
    findOne({ id }) {
        return this.dentistService.findOne(id);
    }
    update({ id }, updateDentistDto) {
        if (Object.keys(updateDentistDto).length == 0) {
            throw new common_1.BadRequestException("Please provide data to update");
        }
        return this.dentistService.update(id, updateDentistDto);
    }
    remove({ id }) {
        return this.dentistService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dentist_dto_1.CreateDentistDto]),
    __metadata("design:returntype", void 0)
], DentistController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_dentist_dto_1.GetDentistDto]),
    __metadata("design:returntype", void 0)
], DentistController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], DentistController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto, update_dentist_dto_1.UpdateDentistDto]),
    __metadata("design:returntype", void 0)
], DentistController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.IdRequiredDto]),
    __metadata("design:returntype", void 0)
], DentistController.prototype, "remove", null);
DentistController = __decorate([
    common_1.Controller('dentist'),
    __metadata("design:paramtypes", [dentist_service_1.DentistService])
], DentistController);
exports.DentistController = DentistController;
//# sourceMappingURL=dentist.controller.js.map