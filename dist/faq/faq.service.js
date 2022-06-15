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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const faq_entity_1 = require("./entities/faq.entity");
let FaqService = class FaqService {
    constructor(faqModel) {
        this.faqModel = faqModel;
    }
    create(createFaqDto) {
        const createFaq = new this.faqModel(createFaqDto);
        return createFaq.save();
    }
    findAll(where = {}) {
        return this.faqModel.find(where).exec();
    }
    findOne(id) {
        return this.faqModel.findById(id).exec();
    }
    remove(id) {
        return this.faqModel.deleteOne({ _id: id }).exec();
    }
    update(id, updateFaqDto) {
        return this.faqModel.updateOne({ _id: id }, updateFaqDto).exec();
    }
};
FaqService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(faq_entity_1.Faq.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FaqService);
exports.FaqService = FaqService;
//# sourceMappingURL=faq.service.js.map