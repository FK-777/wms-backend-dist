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
exports.CitySchema = exports.City = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const location_entity_1 = require("./location.entity");
let City = class City {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], City.prototype, "stateCode", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "State" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], City.prototype, "StateId", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], City.prototype, "countryIso", void 0);
__decorate([
    mongoose_1.Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Country" }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], City.prototype, "CountryId", void 0);
__decorate([
    mongoose_1.Prop({ required: false }),
    __metadata("design:type", location_entity_1.Location)
], City.prototype, "location", void 0);
City = __decorate([
    mongoose_1.Schema()
], City);
exports.City = City;
exports.CitySchema = mongoose_1.SchemaFactory.createForClass(City);
//# sourceMappingURL=city.entity.js.map