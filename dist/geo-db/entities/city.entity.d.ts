import { Document } from "mongoose";
import * as mongoose from "mongoose";
import { Location } from "./location.entity";
export declare type CityDocument = City & Document;
export declare class City {
    name: string;
    stateCode: string;
    StateId: mongoose.Schema.Types.ObjectId;
    countryIso: string;
    CountryId: mongoose.Schema.Types.ObjectId;
    location: Location;
}
export declare const CitySchema: mongoose.Schema<Document<City, any, any>, mongoose.Model<Document<City, any, any>, any, any>, {}>;
