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
exports.SettingSchema = exports.Setting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Setting = class Setting {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Setting.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Setting.prototype, "key", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Setting.prototype, "value", void 0);
__decorate([
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Setting.prototype, "priority", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", String)
], Setting.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop({ type: Object }),
    __metadata("design:type", Object)
], Setting.prototype, "config", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Setting.prototype, "isInternal", void 0);
Setting = __decorate([
    mongoose_1.Schema()
], Setting);
exports.Setting = Setting;
exports.SettingSchema = mongoose_1.SchemaFactory.createForClass(Setting);
//# sourceMappingURL=setting.entity.js.map