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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePractitionerDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const day_schedule_dto_1 = require("../../../shared/dto/day-schedule.dto");
class CreatePractitionerDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreatePractitionerDto.prototype, "DentistId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreatePractitionerDto.prototype, "HospitalId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => day_schedule_dto_1.DayScheduleDto),
    __metadata("design:type", Array)
], CreatePractitionerDto.prototype, "schedule", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(["Hospital", "Dentist"]),
    __metadata("design:type", String)
], CreatePractitionerDto.prototype, "createdBy", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(["Hospital", "Dentist"]),
    __metadata("design:type", String)
], CreatePractitionerDto.prototype, "removedBy", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreatePractitionerDto.prototype, "startDate", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreatePractitionerDto.prototype, "endDate", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(["Hospital", "Dentist", "Booth"]),
    __metadata("design:type", String)
], CreatePractitionerDto.prototype, "approvedBy", void 0);
exports.CreatePractitionerDto = CreatePractitionerDto;
//# sourceMappingURL=create-practitioner.dto.js.map