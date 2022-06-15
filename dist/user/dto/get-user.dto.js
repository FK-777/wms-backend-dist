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
exports.GetUserDto = void 0;
const class_validator_1 = require("class-validator");
const dto_1 = require("../../shared/dto");
class GetUserDto extends dto_1.GetApiDto {
    constructor() {
        super();
        this.sb = "createdAt";
        this.sd = "-1";
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], GetUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], GetUserDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], GetUserDto.prototype, "role", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], GetUserDto.prototype, "roleId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(['1', '0']),
    __metadata("design:type", String)
], GetUserDto.prototype, "verified", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(['1', '0']),
    __metadata("design:type", String)
], GetUserDto.prototype, "blocked", void 0);
exports.GetUserDto = GetUserDto;
//# sourceMappingURL=get-user.dto.js.map