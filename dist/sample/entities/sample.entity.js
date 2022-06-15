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
exports.SampleSchema = exports.Sample = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Sample = class Sample {
};
__decorate([
    mongoose_1.Prop({ enum: ["Blood", "Saliva", "Tissue"], required: false, default: "Blood" }),
    __metadata("design:type", String)
], Sample.prototype, "sampleType", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "isSmoker", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "photoTaken", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Sample.prototype, "fName", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Sample.prototype, "pNumber", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Sample.prototype, "cnic", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Date)
], Sample.prototype, "sampleDate", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Male", "Female", "Other"], required: false, default: "Male" }),
    __metadata("design:type", String)
], Sample.prototype, "gender", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Sample.prototype, "caste", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Sample.prototype, "address", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Sample.prototype, "district", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Sample.prototype, "signature", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Sample.prototype, "weight", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Sample.prototype, "height", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "familyDisease", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "relationPreviousSample", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "healthy", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "age", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "received", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Sample.prototype, "resultAdded", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Sample.prototype, "lan", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Sample.prototype, "lag", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Sample.prototype, "labName", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Sample.prototype, "barcode", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Sample.prototype, "UserId", void 0);
Sample = __decorate([
    mongoose_1.Schema()
], Sample);
exports.Sample = Sample;
exports.SampleSchema = mongoose_1.SchemaFactory.createForClass(Sample);
//# sourceMappingURL=sample.entity.js.map