import { Document } from "mongoose";
export declare type RoleDocument = Role & Document;
export declare class Role {
    name: string;
    identifier: string;
    permissions: string[];
    isPublic: boolean;
    isDeleteAble: boolean;
}
export declare const RoleSchema: import("mongoose").Schema<Document<Role, any, any>, import("mongoose").Model<Document<Role, any, any>, any, any>, {}>;
