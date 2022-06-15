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
exports.GeoDbService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const city_entity_1 = require("./entities/city.entity");
const country_entity_1 = require("./entities/country.entity");
const state_entity_1 = require("./entities/state.entity");
let GeoDbService = class GeoDbService {
    constructor(CountryModel, StateModel, CityModel) {
        this.CountryModel = CountryModel;
        this.StateModel = StateModel;
        this.CityModel = CityModel;
    }
    findAllCities(getCityDto) {
        const where = {};
        if (Number(getCityDto.l) > 2000)
            getCityDto.l = 2000;
        if (getCityDto.s) {
            if (!where["$or"])
                where["$or"] = [];
            where["$or"].push({ name: new RegExp(getCityDto.s, "i") }, { countryIso: new RegExp(getCityDto.s, "i") }, { stateCode: new RegExp(getCityDto.s, "i") });
        }
        if (getCityDto.country) {
            where["CountryId"] = new mongoose.Types.ObjectId(getCityDto.country);
        }
        if (getCityDto.countryIso) {
            where["countryIso"] = getCityDto.countryIso;
        }
        if (getCityDto.state) {
            where["StateId"] = new mongoose.Types.ObjectId(getCityDto.state);
        }
        if (getCityDto.stateCode) {
            where["stateCode"] = getCityDto.stateCode;
        }
        return this.CityModel.aggregate([
            { "$match": where },
            { $sort: { [getCityDto.sb]: Number(getCityDto.sd) } },
            { $skip: Number(getCityDto.o) },
            { $limit: Number(getCityDto.l) },
        ]);
    }
    findAllStates(getStateDto) {
        const where = {};
        if (Number(getStateDto.l) > 2000)
            getStateDto.l = 2000;
        if (getStateDto.s) {
            if (!where["$or"])
                where["$or"] = [];
            where["$or"].push({ name: new RegExp(getStateDto.s, "i") }, { countryIso: new RegExp(getStateDto.s, "i") }, { code: new RegExp(getStateDto.s, "i") });
        }
        if (getStateDto.country) {
            where["CountryId"] = new mongoose.Types.ObjectId(getStateDto.country);
        }
        if (getStateDto.countryIso) {
            where["countryIso"] = getStateDto.countryIso;
        }
        return this.StateModel.aggregate([
            { "$match": where },
            { $sort: { [getStateDto.sb]: Number(getStateDto.sd) } },
            { $skip: Number(getStateDto.o) },
            { $limit: Number(getStateDto.l) },
        ]);
    }
    findAllCountries(getCountryDto) {
        const where = {};
        if (Number(getCountryDto.l) > 2000)
            getCountryDto.l = 2000;
        if (getCountryDto.s) {
            if (!where["$or"])
                where["$or"] = [];
            where["$or"].push({ name: new RegExp(getCountryDto.s, "i") }, { iso: new RegExp(getCountryDto.s, "i") });
        }
        return this.CountryModel.aggregate([
            { "$match": where },
            { $sort: { [getCountryDto.sb]: Number(getCountryDto.sd) } },
            { $skip: Number(getCountryDto.o) },
            { $limit: Number(getCountryDto.l) },
        ]);
    }
    createManyCountries(countries) {
        return this.CountryModel.insertMany(countries);
    }
    createCountry(country) {
        return this.CountryModel.create(country);
    }
    createManyStates(states) {
        return this.StateModel.insertMany(states);
    }
    createState(state) {
        return this.StateModel.create(state);
    }
    createManyCities(cities) {
        return this.CityModel.insertMany(cities);
    }
    createCity(city) {
        return this.CityModel.create(city);
    }
};
GeoDbService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(country_entity_1.Country.name)),
    __param(1, mongoose_1.InjectModel(state_entity_1.State.name)),
    __param(2, mongoose_1.InjectModel(city_entity_1.City.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], GeoDbService);
exports.GeoDbService = GeoDbService;
//# sourceMappingURL=geo-db.service.js.map