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
exports.CreateDentistDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const create_achievement_dto_1 = require("../../achievement/dto/create-achievement.dto");
const create_education_dto_1 = require("../../education/dto/create-education.dto");
const create_experience_dto_1 = require("../../experience/dto/create-experience.dto");
class CreateDentistDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(50),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "fName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(50),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "lName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(50),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "educationTagline", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(50),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "specializationTagline", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsPhoneNumber(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(500),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "profilePicture", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.MaxLength(5000),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(100),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "slug", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateDentistDto.prototype, "CityId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(100),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDentistDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], CreateDentistDto.prototype, "skills", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ each: true }),
    class_validator_1.IsArray(),
    class_validator_1.IsMongoId({ each: true }),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CreateDentistDto.prototype, "CategoryIds", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => create_experience_dto_1.CreateExperienceDto),
    __metadata("design:type", Array)
], CreateDentistDto.prototype, "experience", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => create_education_dto_1.CreateEducationDto),
    __metadata("design:type", Array)
], CreateDentistDto.prototype, "education", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => create_achievement_dto_1.CreateAchievementDto),
    __metadata("design:type", Array)
], CreateDentistDto.prototype, "achievements", void 0);
exports.CreateDentistDto = CreateDentistDto;
//# sourceMappingURL=create-dentist.dto.js.map