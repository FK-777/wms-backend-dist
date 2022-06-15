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
exports.FamilySchema = exports.Family = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Family = class Family {
};
__decorate([
    mongoose_1.Prop({ enum: ["Blood", "Saliva", "Tissue"], required: false, default: "Blood" }),
    __metadata("design:type", String)
], Family.prototype, "sampleType", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "isSmoker", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "photoTaken", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Family.prototype, "familyName", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Family.prototype, "fName", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Family.prototype, "pNumber", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Family.prototype, "cnic", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Date)
], Family.prototype, "sampleDate", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Male", "Female", "Other"], required: false, default: "Male" }),
    __metadata("design:type", String)
], Family.prototype, "gender", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Family.prototype, "caste", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Family.prototype, "address", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Family.prototype, "district", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Family.prototype, "weight", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Family.prototype, "height", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "familyDisease", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "relationPreviousSample", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "healthy", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Family.prototype, "relation", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "age", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Family.prototype, "lan", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Family.prototype, "lag", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Family.prototype, "labName", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Family.prototype, "barcode", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "received", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Family.prototype, "resultAdded", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Family.prototype, "UserId", void 0);
Family = __decorate([
    mongoose_1.Schema()
], Family);
exports.Family = Family;
exports.FamilySchema = mongoose_1.SchemaFactory.createForClass(Family);
//# sourceMappingURL=family.entity.js.map