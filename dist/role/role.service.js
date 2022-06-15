"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cache_service_1 = require("../shared/services/cache/cache.service");
const util_service_1 = require("../shared/services/util/util.service");
const permission_entity_1 = require("./entities/permission.entity");
const role_entity_1 = require("./entities/role.entity");
let RoleService = class RoleService {
    constructor(roleModel, permissionModel, cacheService) {
        this.roleModel = roleModel;
        this.permissionModel = permissionModel;
        this.cacheService = cacheService;
    }
    create(createRoleDto) {
        createRoleDto.identifier = util_service_1.UtilService.generateAnId(20);
        const createRole = new this.roleModel(createRoleDto);
        return createRole.save();
    }
    findAll(where = {}) {
        return this.roleModel.find(where).exec();
    }
    async findOne(id) {
        try {
            return await this.roleModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.BadRequestException("The id is invalid");
        }
        ;
    }
    async findOneByIdentifier(identifier) {
        try {
            return await this.roleModel.findOne({
                identifier
            }).exec();
        }
        catch (error) {
            throw new common_1.BadRequestException("Role does not exist");
        }
        ;
    }
    async findOneCached(id) {
        try {
            let role;
            role = await this.cacheService.get(id);
            if (!role) {
                role = await this.findOne(id);
                await this.cacheService.set(id, role);
            }
            return role;
        }
        catch (error) {
            throw new common_1.BadRequestException("The id is invalid");
        }
        ;
    }
    async update(id, updateRoleDto) {
        try {
            await this.roleModel.updateOne({ _id: id }, updateRoleDto).exec();
            await this.cacheService.set(id, (await this.findOne(id)));
            return "Record updated successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be updated");
        }
        ;
    }
    async remove(id) {
        try {
            await this.roleModel.deleteOne({ _id: id, isDeleteAble: true }).exec();
            await this.cacheService.delete(id);
            return "Record deleted successfully";
        }
        catch (error) {
            throw new common_1.BadRequestException("Record could not be deleted");
        }
        ;
    }
    async createManyRoles(createRolesDto) {
        return await this.roleModel.insertMany(createRolesDto);
    }
    async createManyPermissions(createPermissionsDto) {
        return await this.permissionModel.insertMany(createPermissionsDto);
    }
    findAllPermissions() {
        return this.permissionModel.find().exec();
    }
    async truncateCollection() {
        if (process.env.NODE_ENV !== "TakeOff") {
            return;
        }
        return await this.permissionModel.deleteMany({});
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(role_entity_1.Role.name)),
    __param(1, mongoose_1.InjectModel(permission_entity_1.Permission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        cache_service_1.CacheService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map