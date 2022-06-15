import { Document } from "mongoose";
import * as mongoose from "mongoose";
import { Location } from "./location.entity";
export declare type StateDocument = State & Document;
export declare class State {
    name: string;
    code: string;
    countryIso: string;
    CountryId: mongoose.Schema.Types.ObjectId;
    location: Location;
}
export declare const StateSchema: mongoose.Schema<Document<State, any, any>, mongoose.Model<Document<State, any, any>, any, any>, {}>;
