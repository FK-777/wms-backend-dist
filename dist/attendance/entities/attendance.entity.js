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
exports.AttendanceSchema = exports.Attendance = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Attendance = class Attendance {
};
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Attendance.prototype, "inTime", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Attendance.prototype, "outTime", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Attendance.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Attendance.prototype, "day", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Attendance.prototype, "month", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Attendance.prototype, "lat", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Attendance.prototype, "lng", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Attendance.prototype, "outLat", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Number)
], Attendance.prototype, "outLng", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Attendance.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Boolean)
], Attendance.prototype, "isVerified", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["pin", "thumb"], required: false }),
    __metadata("design:type", String)
], Attendance.prototype, "entery", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["in", "out"], required: false }),
    __metadata("design:type", String)
], Attendance.prototype, "location", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Attendance.prototype, "EmployeeId", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Attendance.prototype, "OfficeId", void 0);
Attendance = __decorate([
    mongoose_1.Schema()
], Attendance);
exports.Attendance = Attendance;
exports.AttendanceSchema = mongoose_1.SchemaFactory.createForClass(Attendance);
//# sourceMappingURL=attendance.entity.js.map