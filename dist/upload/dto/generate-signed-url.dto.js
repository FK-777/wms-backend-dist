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
exports.GenerateSignedUrlDto = void 0;
const class_validator_1 = require("class-validator");
class GenerateSignedUrlDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(500),
    class_validator_1.Matches(/\.(jpe?g|png|webp|mp4|3gp)$/i, {
        message: "Only jpg, jpeg, png, mp4 and 3gp files are allowed."
    }),
    __metadata("design:type", String)
], GenerateSignedUrlDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(["private", "public-read", "public-read-write", "authenticated-read"]),
    __metadata("design:type", String)
], GenerateSignedUrlDto.prototype, "access", void 0);
exports.GenerateSignedUrlDto = GenerateSignedUrlDto;
//# sourceMappingURL=generate-signed-url.dto.js.map