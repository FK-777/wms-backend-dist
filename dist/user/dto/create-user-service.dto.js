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
exports.CreateUserServiceDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateUserServiceDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "fName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "lName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "officeName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(255),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserServiceDto.prototype, "pNumber", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserServiceDto.prototype, "pin", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserServiceDto.prototype, "lat", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserServiceDto.prototype, "lng", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "university", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "city", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "RoleId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(500),
    __metadata("design:type", String)
], CreateUserServiceDto.prototype, "profilePicture", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateUserServiceDto.prototype, "OfficeId", void 0);
exports.CreateUserServiceDto = CreateUserServiceDto;
//# sourceMappingURL=create-user-service.dto.js.map