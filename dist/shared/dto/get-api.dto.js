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
exports.GetApiDto = void 0;
const class_validator_1 = require("class-validator");
class GetApiDto {
    constructor() {
        this.l = 500000;
        this.o = 0;
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], GetApiDto.prototype, "s", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], GetApiDto.prototype, "sb", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], GetApiDto.prototype, "sd", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], GetApiDto.prototype, "l", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], GetApiDto.prototype, "o", void 0);
exports.GetApiDto = GetApiDto;
//# sourceMappingURL=get-api.dto.js.map