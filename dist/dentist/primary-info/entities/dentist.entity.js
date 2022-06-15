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
exports.DentistSchema = exports.Dentist = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const experience_entity_1 = require("../../experience/entities/experience.entity");
const education_entity_1 = require("../../education/entities/education.entity");
const achievement_entity_1 = require("../../achievement/entities/achievement.entity");
let Dentist = class Dentist {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Dentist.prototype, "fName", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Dentist.prototype, "lName", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Dentist.prototype, "educationTagline", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Dentist.prototype, "specializationTagline", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Dentist.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Dentist.prototype, "profilePicture", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Dentist.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Dentist.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose_2.Schema.Types.ObjectId, ref: "City" }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Dentist.prototype, "CityId", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Dentist.prototype, "address", void 0);
__decorate([
    mongoose_1.Prop({ required: false, default: [] }),
    __metadata("design:type", Array)
], Dentist.prototype, "skills", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: [mongoose_2.Schema.Types.ObjectId], ref: "Category" }),
    __metadata("design:type", Array)
], Dentist.prototype, "CategoryIds", void 0);
__decorate([
    mongoose_1.Prop({ type: [experience_entity_1.ExperienceSchema], required: false, default: [] }),
    __metadata("design:type", Array)
], Dentist.prototype, "experience", void 0);
__decorate([
    mongoose_1.Prop({ type: [education_entity_1.EducationSchema], required: false, default: [] }),
    __metadata("design:type", Array)
], Dentist.prototype, "education", void 0);
__decorate([
    mongoose_1.Prop({ type: [achievement_entity_1.AchievementSchema], required: false, default: [] }),
    __metadata("design:type", Array)
], Dentist.prototype, "achievements", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", String)
], Dentist.prototype, "isVerified", void 0);
Dentist = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Dentist);
exports.Dentist = Dentist;
exports.DentistSchema = mongoose_1.SchemaFactory.createForClass(Dentist);
//# sourceMappingURL=dentist.entity.js.map