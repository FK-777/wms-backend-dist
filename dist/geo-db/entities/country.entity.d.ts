import { Document } from "mongoose";
import { Location } from "./location.entity";
export declare type CountryDocument = Country & Document;
export declare class Country {
    name: string;
    iso: string;
    flag: string;
    location: Location;
}
export declare const CountrySchema: import("mongoose").Schema<Document<Country, any, any>, import("mongoose").Model<Document<Country, any, any>, any, any>, {}>;
