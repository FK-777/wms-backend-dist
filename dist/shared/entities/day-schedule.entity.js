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
exports.DaySchedule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class TimeObject {
}
__decorate([
    mongoose_1.Prop({ min: 0, max: 23 }),
    __metadata("design:type", Number)
], TimeObject.prototype, "hour", void 0);
__decorate([
    mongoose_1.Prop({ min: 0, max: 59 }),
    __metadata("design:type", Number)
], TimeObject.prototype, "minute", void 0);
class DaySchedule {
}
__decorate([
    mongoose_1.Prop({ min: 1, max: 7 }),
    __metadata("design:type", Number)
], DaySchedule.prototype, "day", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", TimeObject)
], DaySchedule.prototype, "startTime", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", TimeObject)
], DaySchedule.prototype, "endTime", void 0);
exports.DaySchedule = DaySchedule;
//# sourceMappingURL=day-schedule.entity.js.map