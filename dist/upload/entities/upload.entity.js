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
exports.UploadTempSchema = exports.UploadTemp = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UploadTemp = class UploadTemp {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], UploadTemp.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], UploadTemp.prototype, "key", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], UploadTemp.prototype, "location", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], UploadTemp.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["private", "public-read", "public-read-write", "authenticated-read"], default: "private", required: true }),
    __metadata("design:type", String)
], UploadTemp.prototype, "access", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], UploadTemp.prototype, "sizes", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UploadTemp.prototype, "module", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: false }),
    __metadata("design:type", Boolean)
], UploadTemp.prototype, "inUse", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose_2.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], UploadTemp.prototype, "CreatedBy", void 0);
UploadTemp = __decorate([
    mongoose_1.Schema({ timestamps: true })
], UploadTemp);
exports.UploadTemp = UploadTemp;
exports.UploadTempSchema = mongoose_1.SchemaFactory.createForClass(UploadTemp);
//# sourceMappingURL=upload.entity.js.map