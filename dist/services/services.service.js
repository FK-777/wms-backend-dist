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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const service_entity_1 = require("./entities/service.entity");
let ServicesService = class ServicesService {
    constructor(ServiceModel) {
        this.ServiceModel = ServiceModel;
    }
    create(createServiceDto) {
        const createService = new this.ServiceModel(createServiceDto);
        return createService.save();
    }
    findAll(getServiceDto) {
        try {
            const where = {};
            if (getServiceDto.s) {
                if (!where["$or"])
                    where["$or"] = [];
                where["$or"].push({ name: new RegExp(getServiceDto.s, "i") });
            }
            if (getServiceDto.identifier) {
                where['identifier'] = getServiceDto.identifier;
            }
            return this.ServiceModel.find()
                .where(where)
                .sort([[getServiceDto.sb, getServiceDto.sd]])
                .skip(Number(getServiceDto.o))
                .limit(Number(getServiceDto.l))
                .exec();
        }
        catch (error) {
            return [];
        }
    }
    findOne(id) {
        return this.ServiceModel.findById(id).exec();
    }
    async remove(id) {
        try {
            await this.ServiceModel.deleteOne({ _id: id }).exec();
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
        ;
    }
    async update(id, updateServiceDto) {
        try {
            await this.ServiceModel.updateOne({ _id: id }, updateServiceDto).exec();
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be updated");
        }
        ;
    }
};
ServicesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(service_entity_1.Service.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map