/// <reference types="mongoose" />
import { GeoDbService } from './geo-db.service';
import { GetCityDto } from './dto/get-city.dto';
import { GetCountryDto } from './dto/get-country.dto';
import { GetStateDto } from './dto/get-state.dto';
export declare class GeoDbController {
    private readonly geoDbService;
    constructor(geoDbService: GeoDbService);
    findAllCountries(getCountryDto: GetCountryDto): import("mongoose").Aggregate<any[]>;
    findAllStates(getStateDto: GetStateDto): import("mongoose").Aggregate<any[]>;
    findAllCities(getCityDto: GetCityDto): import("mongoose").Aggregate<any[]>;
}
