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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role/role.service");
const setting_service_1 = require("./setting/setting.service");
const setting_enum_1 = require("./shared/enums/setting.enum");
const user_service_1 = require("./user/user.service");
const schedule_1 = require("@nestjs/schedule");
const category_service_1 = require("./category/category.service");
const CountriesToImport = ["CA"];
let AppService = class AppService {
    constructor(schedulerRegistry, settingService, roleService, userService, categoryService) {
        this.schedulerRegistry = schedulerRegistry;
        this.settingService = settingService;
        this.roleService = roleService;
        this.userService = userService;
        this.categoryService = categoryService;
    }
    onApplicationBootstrap() {
        this.seedTheDb();
    }
    startCron() {
        console.log(new Date());
    }
    async seedTheDb() {
        try {
            const IsDbSeeded = await this.settingService.findOneByKey(setting_enum_1.ESettingKeys.IsDbSeeded);
            if (IsDbSeeded) {
                return;
            }
            const settings = [
                {
                    title: "Flag For Db Seed Status",
                    key: setting_enum_1.ESettingKeys.IsDbSeeded,
                    value: true.toString(),
                    priority: 0,
                    type: "",
                    config: null,
                    isInternal: true
                }
            ];
            const permissions = [];
            const adminRole = {
                name: "Admin",
                isPublic: false,
                identifier: "admin",
                permissions: permissions.map((x) => x.identifier),
                isDeleteAble: false
            };
            await this.roleService.createManyPermissions(permissions);
            await this.roleService.create(adminRole);
            await this.roleService.createManyRoles([
                {
                    name: "Employee",
                    isPublic: true,
                    identifier: "employee",
                    permissions: permissions.map((x) => x.identifier),
                    isDeleteAble: false
                },
                {
                    name: "Office",
                    isPublic: true,
                    identifier: "office",
                    permissions: permissions.map((x) => x.identifier),
                    isDeleteAble: false
                }
            ]);
            await this.settingService.createMany(settings);
            const insertedAdminRole = await this.roleService.findAll({ identifier: adminRole.identifier });
            const adminUser = {
                fName: "Super",
                lName: "Admin",
                email: "admin@example.com",
                password: "hello@12",
                RoleId: insertedAdminRole[0]._id,
                OfficeId: undefined,
                officeName: "Hello",
                pNumber: 0,
                university: '',
                address: '',
                city: '',
                lat: 0,
                lng: 0,
                pin: 1234
            };
            await this.userService.create(adminUser);
            const categories = [
                {
                    "seo": { "title": "Filling", "description": "Filling", "keywords": "fjsdkfjk, sdfjkjs" },
                    "slug": "filling",
                    "priority": 0,
                    "thumbnail": "./jhsd/",
                    "description": "Filling",
                    "summary": "Filling",
                    "name": "Filling"
                }, {
                    "seo": { "title": "Surgery", "description": "Surgery", "keywords": "fjsdkfjk, sdfjkjs" },
                    "slug": "surgery",
                    "priority": 0,
                    "thumbnail": "./jhsd/",
                    "description": "Surgery",
                    "summary": "Surgery",
                    "name": "Surgery"
                },
            ];
            categories.forEach((category) => this.categoryService.create(category));
        }
        catch (error) {
            await this.roleService.truncateCollection();
            await this.settingService.truncateCollection();
        }
    }
};
__decorate([
    schedule_1.Cron(schedule_1.CronExpression.EVERY_30_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppService.prototype, "startCron", null);
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [schedule_1.SchedulerRegistry, setting_service_1.SettingService, role_service_1.RoleService,
        user_service_1.UserService, category_service_1.CategoryService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map