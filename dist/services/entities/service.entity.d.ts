import { Document } from "mongoose";
export declare type ServiceDocument = Service & Document;
export declare class Service {
    name: string;
    identifier: string;
    attributes: string[];
}
export declare const ServiceSchema: import("mongoose").Schema<Document<Service, any, any>, import("mongoose").Model<Document<Service, any, any>, any, any>, {}>;
