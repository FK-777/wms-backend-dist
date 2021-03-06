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
exports.ExperienceSchema = exports.Experience = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Experience = class Experience {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Experience.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Experience.prototype, "employerName", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Date)
], Experience.prototype, "startDate", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Date)
], Experience.prototype, "endDate", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Experience.prototype, "isCurrent", void 0);
Experience = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Experience);
exports.Experience = Experience;
exports.ExperienceSchema = mongoose_1.SchemaFactory.createForClass(Experience);
//# sourceMappingURL=experience.entity.js.map