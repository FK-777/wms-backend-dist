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
exports.HospitalSchema = exports.Hospital = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const location_entity_1 = require("../../../shared/entities/location.entity");
let Hospital = class Hospital {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: [mongoose_2.Schema.Types.ObjectId], ref: "Category" }),
    __metadata("design:type", Array)
], Hospital.prototype, "CategoryIds", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: [mongoose_2.Schema.Types.ObjectId], ref: "Dentist", default: [] }),
    __metadata("design:type", Array)
], Hospital.prototype, "Practitioners", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: mongoose_2.Schema.Types.ObjectId, ref: "City" }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Hospital.prototype, "CityId", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "address", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Hospital.prototype, "thumbnail", void 0);
__decorate([
    mongoose_1.Prop({ required: true, maxlength: 5000 }),
    __metadata("design:type", String)
], Hospital.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Hospital.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Hospital.prototype, "rating", void 0);
__decorate([
    mongoose_1.Prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Hospital.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: mongoose_2.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Hospital.prototype, "AdminId", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", location_entity_1.Location)
], Hospital.prototype, "location", void 0);
__decorate([
    mongoose_1.Prop({ required: false, default: [] }),
    __metadata("design:type", Array)
], Hospital.prototype, "services", void 0);
__decorate([
    mongoose_1.Prop({ required: false, default: [] }),
    __metadata("design:type", Array)
], Hospital.prototype, "images", void 0);
__decorate([
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Hospital.prototype, "isDeleted", void 0);
Hospital = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Hospital);
exports.Hospital = Hospital;
exports.HospitalSchema = mongoose_1.SchemaFactory.createForClass(Hospital);
//# sourceMappingURL=hospital.entity.js.map