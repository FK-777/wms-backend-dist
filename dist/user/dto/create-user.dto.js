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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateUserDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "fName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "deviceID", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "shiftName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "designation", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MinLength(2),
    class_validator_1.MaxLength(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "officeName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(255),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "pNumber", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "lat", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "lng", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "pin", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "university", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(500),
    __metadata("design:type", String)
], CreateUserDto.prototype, "profilePicture", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateUserDto.prototype, "OfficeId", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map