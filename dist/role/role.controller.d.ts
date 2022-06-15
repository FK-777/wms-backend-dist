import { RoleService } from "./role.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<import("./entities/role.entity").RoleDocument>;
    findAll(): Promise<import("./entities/role.entity").RoleDocument[]>;
    findAllPermissions(): Promise<import("./entities/permission.entity").PermissionDocument[]>;
    findOne(id: string): Promise<import("./entities/role.entity").RoleDocument>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<string>;
    remove(id: string): Promise<string>;
}
