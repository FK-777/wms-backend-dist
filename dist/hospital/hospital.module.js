"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalModule = void 0;
const common_1 = require("@nestjs/common");
const hospital_service_1 = require("./primary-info/hospital.service");
const hospital_controller_1 = require("./primary-info/hospital.controller");
const mongoose_1 = require("@nestjs/mongoose");
const hospital_entity_1 = require("./primary-info/entities/hospital.entity");
const shared_module_1 = require("../shared/shared.module");
const practitioner_service_1 = require("./practitioner/practitioner.service");
const practitioner_controller_1 = require("./practitioner/practitioner.controller");
const practitioner_entity_1 = require("./practitioner/entities/practitioner.entity");
const upload_module_1 = require("../upload/upload.module");
let HospitalModule = class HospitalModule {
};
HospitalModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: hospital_entity_1.Hospital.name, schema: hospital_entity_1.HospitalSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: practitioner_entity_1.Practitioner.name, schema: practitioner_entity_1.PractitionerSchema },
            ]),
            shared_module_1.SharedModule,
            upload_module_1.UploadModule
        ],
        controllers: [hospital_controller_1.HospitalController, practitioner_controller_1.PractitionerController],
        providers: [hospital_service_1.HospitalService, practitioner_service_1.PractitionerService],
        exports: [hospital_service_1.HospitalService]
    })
], HospitalModule);
exports.HospitalModule = HospitalModule;
//# sourceMappingURL=hospital.module.js.map