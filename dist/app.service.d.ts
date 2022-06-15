import { OnApplicationBootstrap } from '@nestjs/common';
import { RoleService } from './role/role.service';
import { SettingService } from './setting/setting.service';
import { UserService } from './user/user.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CategoryService } from './category/category.service';
export declare class AppService implements OnApplicationBootstrap {
    private schedulerRegistry;
    private readonly settingService;
    private readonly roleService;
    private readonly userService;
    private readonly categoryService;
    constructor(schedulerRegistry: SchedulerRegistry, settingService: SettingService, roleService: RoleService, userService: UserService, categoryService: CategoryService);
    onApplicationBootstrap(): void;
    startCron(): void;
    seedTheDb(): Promise<void>;
}
