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
exports.GeoDbController = void 0;
const common_1 = require("@nestjs/common");
const geo_db_service_1 = require("./geo-db.service");
const get_city_dto_1 = require("./dto/get-city.dto");
const get_country_dto_1 = require("./dto/get-country.dto");
const get_state_dto_1 = require("./dto/get-state.dto");
const roles_guard_1 = require("../auth/guards/roles.guard");
let GeoDbController = class GeoDbController {
    constructor(geoDbService) {
        this.geoDbService = geoDbService;
    }
    findAllCountries(getCountryDto) {
        return this.geoDbService.findAllCountries(getCountryDto);
    }
    findAllStates(getStateDto) {
        return this.geoDbService.findAllStates(getStateDto);
    }
    findAllCities(getCityDto) {
        return this.geoDbService.findAllCities(getCityDto);
    }
};
__decorate([
    roles_guard_1.Public(),
    common_1.Get("country"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_country_dto_1.GetCountryDto]),
    __metadata("design:returntype", void 0)
], GeoDbController.prototype, "findAllCountries", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Get("state"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_state_dto_1.GetStateDto]),
    __metadata("design:returntype", void 0)
], GeoDbController.prototype, "findAllStates", null);
__decorate([
    roles_guard_1.Public(),
    common_1.Get("city"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_city_dto_1.GetCityDto]),
    __metadata("design:returntype", void 0)
], GeoDbController.prototype, "findAllCities", null);
GeoDbController = __decorate([
    common_1.Controller('geo-db'),
    __metadata("design:paramtypes", [geo_db_service_1.GeoDbService])
], GeoDbController);
exports.GeoDbController = GeoDbController;
//# sourceMappingURL=geo-db.controller.js.map