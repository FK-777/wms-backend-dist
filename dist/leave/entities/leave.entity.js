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
exports.LeaveSchema = exports.Leave = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Leave = class Leave {
};
__decorate([
    mongoose_1.Prop({ enum: ["Medical", "Casual", "Privilege", "Compensatory Off"], required: false }),
    __metadata("design:type", String)
], Leave.prototype, "leaveType", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Date)
], Leave.prototype, "startDate", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", Date)
], Leave.prototype, "endDate", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Leave.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Leave.prototype, "reason", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["Pending", "Approved", "Declined"], required: false, default: "Pending" }),
    __metadata("design:type", String)
], Leave.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Leave.prototype, "EmployeeId", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Leave.prototype, "OfficeId", void 0);
Leave = __decorate([
    mongoose_1.Schema()
], Leave);
exports.Leave = Leave;
exports.LeaveSchema = mongoose_1.SchemaFactory.createForClass(Leave);
//# sourceMappingURL=leave.entity.js.map