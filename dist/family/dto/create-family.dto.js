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
exports.CreateFamilyDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateFamilyDto {
}
__decorate([
    class_validator_1.IsEnum(["Blood", "Saliva", "Tissue"]),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "sampleType", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "isSmoker", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "photoTaken", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "familyName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "fName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(12),
    __metadata("design:type", Number)
], CreateFamilyDto.prototype, "pNumber", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFamilyDto.prototype, "cnic", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateFamilyDto.prototype, "sampleDate", void 0);
__decorate([
    class_validator_1.IsEnum(["Male", "Female", "Other"]),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "gender", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(12),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "caste", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(120),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(60),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "district", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFamilyDto.prototype, "weight", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFamilyDto.prototype, "height", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "familyDisease", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "relationPreviousSample", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "healthy", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "relation", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "age", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "parentFirstCousin", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFamilyDto.prototype, "lan", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFamilyDto.prototype, "lag", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "labName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateFamilyDto.prototype, "barcode", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "received", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateFamilyDto.prototype, "resultAdded", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateFamilyDto.prototype, "UserId", void 0);
exports.CreateFamilyDto = CreateFamilyDto;
//# sourceMappingURL=create-family.dto.js.map