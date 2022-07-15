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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const location_entity_1 = require("./entities/location.entity");
let LocationService = class LocationService {
    constructor(locationModel) {
        this.locationModel = locationModel;
    }
    create(createLocationDto) {
        const createLocation = new this.locationModel(createLocationDto);
        return createLocation.save();
    }
    findAll(where = {}) {
        return this.locationModel.find(where).exec();
    }
    findOne(id) {
        return this.locationModel.findById(id).exec();
    }
    remove(id) {
        return this.locationModel.deleteOne({ _id: id }).exec();
    }
    update(id, updateLocationDto) {
        return this.locationModel.updateOne({ _id: id }, updateLocationDto).exec();
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(location_entity_1.Location.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map