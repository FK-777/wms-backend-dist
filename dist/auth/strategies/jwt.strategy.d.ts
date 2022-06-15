import { IJwtPayload } from './../interfaces/jwt-payload.interface';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { RoleService } from 'src/role/role.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    private readonly roleService;
    constructor(authService: AuthService, roleService: RoleService);
    validate(jwtPayload: IJwtPayload): Promise<any>;
}
export {};
