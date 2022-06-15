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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
exports.IS_PUBLIC_KEY = "isPublic";
const Public = () => common_1.SetMetadata(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
let RolesGuard = class RolesGuard extends passport_1.AuthGuard('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    handleRequest(err, user, info, context) {
        const isPublic = this.reflector.get(exports.IS_PUBLIC_KEY, context.getHandler());
        if (isPublic) {
            return user || null;
        }
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        if (user.role && user.role === "admin") {
            return user;
        }
        const requiredPermissions = this.reflector.get('permissions', context.getHandler());
        const hasPermission = () => user.permissions.some((permission) => requiredPermissions.includes(permission));
        if (requiredPermissions && requiredPermissions.length && !hasPermission()) {
            throw new common_1.ForbiddenException();
        }
        return user;
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map