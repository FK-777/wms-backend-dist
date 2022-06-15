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
exports.CreateHospitalDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const dto_1 = require("../../../shared/dto");
const location_dto_1 = require("../../../shared/dto/location.dto");
const media_dto_1 = require("../../../shared/dto/media.dto");
const create_service_dto_1 = require("./create-service.dto");
class CreateHospitalDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(50),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateHospitalDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    class_validator_1.IsMongoId({ each: true }),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CreateHospitalDto.prototype, "CategoryIds", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateHospitalDto.prototype, "CityId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(50),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateHospitalDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(500),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateHospitalDto.prototype, "thumbnail", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(5000),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateHospitalDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsPhoneNumber(),
    __metadata("design:type", String)
], CreateHospitalDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateHospitalDto.prototype, "AdminId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(100),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateHospitalDto.prototype, "slug", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => dto_1.SeoDto),
    __metadata("design:type", dto_1.SeoDto)
], CreateHospitalDto.prototype, "seo", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => create_service_dto_1.CreateServiceDto),
    __metadata("design:type", Array)
], CreateHospitalDto.prototype, "services", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], CreateHospitalDto.prototype, "images", void 0);
exports.CreateHospitalDto = CreateHospitalDto;
//# sourceMappingURL=create-hospital.dto.js.map