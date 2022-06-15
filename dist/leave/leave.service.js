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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const leave_entity_1 = require("./entities/leave.entity");
let LeaveService = class LeaveService {
    constructor(leaveModel) {
        this.leaveModel = leaveModel;
    }
    create(createLeaveDto) {
        const createLeave = new this.leaveModel(createLeaveDto);
        return createLeave.save();
    }
    findAll(where = {}) {
        return this.leaveModel.find(where).exec();
    }
    findOne(id) {
        return this.leaveModel.findById(id).exec();
    }
    remove(id) {
        return this.leaveModel.deleteOne({ _id: id }).exec();
    }
    update(id, updateLeaveDto) {
        return this.leaveModel.updateOne({ _id: id }, updateLeaveDto).exec();
    }
};
LeaveService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(leave_entity_1.Leave.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LeaveService);
exports.LeaveService = LeaveService;
//# sourceMappingURL=leave.service.js.map