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
exports.ResultSchema = exports.Result = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Result = class Result {
};
__decorate([
    mongoose_1.Prop({ enum: ["Good", "Degraded", "NoDNA"], required: false, default: "Good" }),
    __metadata("design:type", String)
], Result.prototype, "quality", void 0);
__decorate([
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Result.prototype, "volume", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["ul", "ml"], required: false, default: "ul" }),
    __metadata("design:type", String)
], Result.prototype, "unitVol", void 0);
__decorate([
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Result.prototype, "quantity", void 0);
__decorate([
    mongoose_1.Prop({ enum: ["kg", "mol"], required: false, default: "kg" }),
    __metadata("design:type", String)
], Result.prototype, "unitQuan", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: "Sample" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "sampleId", void 0);
__decorate([
    mongoose_1.Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "UserId", void 0);
Result = __decorate([
    mongoose_1.Schema()
], Result);
exports.Result = Result;
exports.ResultSchema = mongoose_1.SchemaFactory.createForClass(Result);
//# sourceMappingURL=result.entity.js.map