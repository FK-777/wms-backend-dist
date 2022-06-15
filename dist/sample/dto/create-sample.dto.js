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
exports.CreateSampleDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateSampleDto {
}
__decorate([
    class_validator_1.IsEnum(["Blood", "Saliva", "Tissue"]),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "sampleType", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "isSmoker", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "photoTaken", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "fName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(12),
    __metadata("design:type", Number)
], CreateSampleDto.prototype, "pNumber", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateSampleDto.prototype, "cnic", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateSampleDto.prototype, "sampleDate", void 0);
__decorate([
    class_validator_1.IsEnum(["Male", "Female", "Other"]),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "gender", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(12),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "caste", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(120),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(60),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "district", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "signature", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateSampleDto.prototype, "weight", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateSampleDto.prototype, "height", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "familyDisease", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "relationPreviousSample", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "healthy", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "age", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "received", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "resultAdded", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateSampleDto.prototype, "parentFirstCousin", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateSampleDto.prototype, "lan", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateSampleDto.prototype, "lag", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "labName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateSampleDto.prototype, "barcode", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateSampleDto.prototype, "UserId", void 0);
exports.CreateSampleDto = CreateSampleDto;
//# sourceMappingURL=create-sample.dto.js.map