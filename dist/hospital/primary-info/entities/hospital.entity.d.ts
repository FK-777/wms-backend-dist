import { Document } from "mongoose";
import { Schema as MongooseSchema } from "mongoose";
import { Location } from "../../../shared/entities/location.entity";
import { Service } from "./service.entity";
export declare type HospitalDocument = Hospital & Document;
export declare class Hospital {
    name: string;
    CategoryIds: MongooseSchema.Types.ObjectId[];
    Practitioners: MongooseSchema.Types.ObjectId[];
    CityId: MongooseSchema.Types.ObjectId;
    address: string;
    thumbnail: string;
    description: string;
    phone: string;
    rating: number;
    slug: string;
    AdminId: MongooseSchema.Types.ObjectId;
    location: Location;
    services: Service[];
    images: string[];
    isDeleted: boolean;
}
export declare const HospitalSchema: MongooseSchema<Document<Hospital, any, any>, import("mongoose").Model<Document<Hospital, any, any>, any, any>, {}>;
