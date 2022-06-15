"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const common_1 = require("@nestjs/common");
const upload_service_1 = require("./upload.service");
const upload_controller_1 = require("./upload.controller");
const mongoose_1 = require("@nestjs/mongoose");
const upload_entity_1 = require("./entities/upload.entity");
const shared_module_1 = require("../shared/shared.module");
let UploadModule = class UploadModule {
};
UploadModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: upload_entity_1.UploadTemp.name, schema: upload_entity_1.UploadTempSchema }]),
            shared_module_1.SharedModule
        ],
        controllers: [upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService],
        exports: [upload_service_1.UploadService]
    })
], UploadModule);
exports.UploadModule = UploadModule;
//# sourceMappingURL=upload.module.js.map