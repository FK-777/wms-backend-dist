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
exports.ShiftService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shift_entity_1 = require("./entities/shift.entity");
let ShiftService = class ShiftService {
    constructor(shiftModel) {
        this.shiftModel = shiftModel;
    }
    create(createShiftDto) {
        const createShift = new this.shiftModel(createShiftDto);
        return createShift.save();
    }
    findAll(where = {}) {
        return this.shiftModel.find(where).exec();
    }
    findOne(id) {
        return this.shiftModel.findById(id).exec();
    }
    update(id, updateShiftDto) {
        return this.shiftModel.updateOne({ _id: id }, updateShiftDto).exec();
    }
    remove(id) {
        return this.shiftModel.deleteOne({ _id: id }).exec();
    }
};
ShiftService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(shift_entity_1.Shift.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ShiftService);
exports.ShiftService = ShiftService;
//# sourceMappingURL=shift.service.js.map