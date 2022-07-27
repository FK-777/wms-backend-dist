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
exports.CreateLeaveDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class CreateLeaveDto {
}
__decorate([
    class_validator_1.IsEnum(["Medical", "Casual", "Privilege", "Compensatory Off"]),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "leaveType", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateLeaveDto.prototype, "startDate", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateLeaveDto.prototype, "endDate", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "date", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "reason", void 0);
__decorate([
    class_validator_1.IsEnum(["Pending", "Approved", "Declined"]),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateLeaveDto.prototype, "EmployeeId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], CreateLeaveDto.prototype, "OfficeId", void 0);
exports.CreateLeaveDto = CreateLeaveDto;
//# sourceMappingURL=create-leave.dto.js.map