import { Model } from "mongoose";
import { CacheService } from "src/shared/services/cache/cache.service";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { PermissionDocument } from "./entities/permission.entity";
import { RoleDocument } from "./entities/role.entity";
export declare class RoleService {
    private readonly roleModel;
    private readonly permissionModel;
    private readonly cacheService;
    constructor(roleModel: Model<RoleDocument>, permissionModel: Model<PermissionDocument>, cacheService: CacheService);
    create(createRoleDto: CreateRoleDto): Promise<RoleDocument>;
    findAll(where?: {}): Promise<RoleDocument[]>;
    findOne(id: string): Promise<RoleDocument>;
    findOneByIdentifier(identifier: string): Promise<RoleDocument>;
    findOneCached(id: string): Promise<any>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<string>;
    remove(id: string): Promise<string>;
    createManyRoles(createRolesDto: CreateRoleDto[]): Promise<RoleDocument[]>;
    createManyPermissions(createPermissionsDto: CreatePermissionDto[]): Promise<PermissionDocument[]>;
    findAllPermissions(): Promise<PermissionDocument[]>;
    truncateCollection(): Promise<import("mongodb").DeleteResult>;
}
