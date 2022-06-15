import { Document } from "mongoose";
export declare type SettingDocument = Setting & Document;
export declare class Setting {
    title: string;
    key: string;
    value: string;
    priority: number;
    type: string;
    config: object;
    isInternal: boolean;
}
export declare const SettingSchema: import("mongoose").Schema<Document<Setting, any, any>, import("mongoose").Model<Document<Setting, any, any>, any, any>, {}>;
