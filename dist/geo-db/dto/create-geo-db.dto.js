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
exports.CreateCityDto = exports.CreateStateDto = exports.CreateCountryDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCountryDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "iso", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "flag", void 0);
__decorate([
    class_validator_1.IsObject(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], CreateCountryDto.prototype, "location", void 0);
exports.CreateCountryDto = CreateCountryDto;
class CreateStateDto {
}
exports.CreateStateDto = CreateStateDto;
class CreateCityDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], CreateCityDto.prototype, "CountryId", void 0);
exports.CreateCityDto = CreateCityDto;
//# sourceMappingURL=create-geo-db.dto.js.map