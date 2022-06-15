"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoDbModule = void 0;
const common_1 = require("@nestjs/common");
const geo_db_service_1 = require("./geo-db.service");
const geo_db_controller_1 = require("./geo-db.controller");
const country_entity_1 = require("./entities/country.entity");
const mongoose_1 = require("@nestjs/mongoose");
const city_entity_1 = require("./entities/city.entity");
const state_entity_1 = require("./entities/state.entity");
country_entity_1.Country;
let GeoDbModule = class GeoDbModule {
};
GeoDbModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: country_entity_1.Country.name, schema: country_entity_1.CountrySchema },
                { name: state_entity_1.State.name, schema: state_entity_1.StateSchema },
                { name: city_entity_1.City.name, schema: city_entity_1.CitySchema },
            ]),
        ],
        controllers: [geo_db_controller_1.GeoDbController],
        providers: [geo_db_service_1.GeoDbService],
        exports: [geo_db_service_1.GeoDbService]
    })
], GeoDbModule);
exports.GeoDbModule = GeoDbModule;
//# sourceMappingURL=geo-db.module.js.map