"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const category_module_1 = require("./category/category.module");
const role_module_1 = require("./role/role.module");
const setting_module_1 = require("./setting/setting.module");
const shared_module_1 = require("./shared/shared.module");
const attendance_module_1 = require("./attendance/attendance.module");
const leave_module_1 = require("./leave/leave.module");
const app_service_1 = require("./app.service");
const services_module_1 = require("./services/services.module");
const schedule_1 = require("@nestjs/schedule");
const location_module_1 = require("./location/location.module");
const shift_module_1 = require("./shift/shift.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: !process.env.NODE_ENV ? '.env' : `.env.${process.env.NODE_ENV.toLowerCase()}`,
                isGlobal: true
            }),
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_CON_STRING || "mongodb://localhost:27017/WMS-main-service"),
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            attendance_module_1.AttendanceModule,
            role_module_1.RoleModule,
            setting_module_1.SettingModule,
            auth_module_1.AuthModule,
            shared_module_1.SharedModule,
            leave_module_1.LeaveModule,
            services_module_1.ServicesModule,
            location_module_1.LocationModule,
            shift_module_1.ShiftModule,
        ],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map