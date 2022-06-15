import { Model } from 'mongoose';
import * as mongoose from "mongoose";
import { CreateCityDto, CreateCountryDto, CreateStateDto } from './dto/create-geo-db.dto';
import { GetCityDto } from './dto/get-city.dto';
import { CityDocument } from './entities/city.entity';
import { CountryDocument } from './entities/country.entity';
import { StateDocument } from './entities/state.entity';
import { GetStateDto } from './dto/get-state.dto';
import { GetCountryDto } from './dto/get-country.dto';
export declare class GeoDbService {
    private readonly CountryModel;
    private readonly StateModel;
    private readonly CityModel;
    constructor(CountryModel: Model<CountryDocument>, StateModel: Model<StateDocument>, CityModel: Model<CityDocument>);
    findAllCities(getCityDto: GetCityDto): mongoose.Aggregate<any[]>;
    findAllStates(getStateDto: GetStateDto): mongoose.Aggregate<any[]>;
    findAllCountries(getCountryDto: GetCountryDto): mongoose.Aggregate<any[]>;
    createManyCountries(countries: CreateCountryDto[]): Promise<CountryDocument[]>;
    createCountry(country: CreateCountryDto): Promise<CountryDocument>;
    createManyStates(states: CreateStateDto[]): Promise<StateDocument[]>;
    createState(state: CreateStateDto): Promise<StateDocument>;
    createManyCities(cities: CreateCityDto[]): Promise<CityDocument[]>;
    createCity(city: CreateCityDto): Promise<CityDocument>;
}
