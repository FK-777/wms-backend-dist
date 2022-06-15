"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DentistModule = void 0;
const common_1 = require("@nestjs/common");
const dentist_service_1 = require("./primary-info/dentist.service");
const dentist_controller_1 = require("./primary-info/dentist.controller");
const dentist_entity_1 = require("./primary-info/entities/dentist.entity");
const mongoose_1 = require("@nestjs/mongoose");
const education_controller_1 = require("./education/education.controller");
const education_service_1 = require("./education/education.service");
const achievement_controller_1 = require("./achievement/achievement.controller");
const achievement_service_1 = require("./achievement/achievement.service");
const experience_controller_1 = require("./experience/experience.controller");
const experience_service_1 = require("./experience/experience.service");
let DentistModule = class DentistModule {
};
DentistModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: dentist_entity_1.Dentist.name, schema: dentist_entity_1.DentistSchema },
            ]),
        ],
        controllers: [dentist_controller_1.DentistController, education_controller_1.EducationController, experience_controller_1.ExperienceController, achievement_controller_1.AchievementController],
        providers: [dentist_service_1.DentistService, education_service_1.EducationService, experience_service_1.ExperienceService, achievement_service_1.AchievementService]
    })
], DentistModule);
exports.DentistModule = DentistModule;
//# sourceMappingURL=dentist.module.js.map