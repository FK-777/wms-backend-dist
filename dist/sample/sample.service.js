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
exports.SampleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sample_entity_1 = require("./entities/sample.entity");
const create_sample_dto_1 = require("./dto/create-sample.dto");
const update_sample_dto_1 = require("./dto/update-sample.dto");
let SampleService = class SampleService {
    constructor(sampleModel) {
        this.sampleModel = sampleModel;
    }
    create(createSampleDto) {
        const createSample = new this.sampleModel(createSampleDto);
        return createSample.save();
    }
    findAll(where = {}) {
        return this.sampleModel.find(where).exec();
    }
    findOne(id) {
        return this.sampleModel.findById(id).exec();
    }
    remove(id) {
        return this.sampleModel.deleteOne({ _id: id }).exec();
    }
    update(id, updateSampleDto) {
        return this.sampleModel.updateOne({ _id: id }, updateSampleDto).exec();
    }
};
SampleService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(sample_entity_1.Sample.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SampleService);
exports.SampleService = SampleService;
//# sourceMappingURL=sample.service.js.map