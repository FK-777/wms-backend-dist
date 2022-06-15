import { Document } from "mongoose";
export declare type PermissionDocument = Permission & Document;
export declare class Permission {
    module: string;
    action: string;
    identifier: string;
}
export declare const PermissionSchema: import("mongoose").Schema<Document<Permission, any, any>, import("mongoose").Model<Document<Permission, any, any>, any, any>, {}>;
