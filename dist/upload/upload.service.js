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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const MimeTypes = require("mime-types");
const aws_service_1 = require("../shared/services/aws/aws.service");
const util_service_1 = require("../shared/services/util/util.service");
const create_upload_dto_1 = require("./dto/create-upload.dto");
const upload_entity_1 = require("./entities/upload.entity");
let UploadService = class UploadService {
    constructor(uploadModel, awsService) {
        this.uploadModel = uploadModel;
        this.awsService = awsService;
    }
    async create(generateSignedUrlDto, UserId) {
        try {
            const fileName = util_service_1.UtilService.cleanAndUniqueFileName(generateSignedUrlDto.name);
            const mimeType = MimeTypes.lookup(fileName);
            const key = "uploads/" + fileName;
            const s3Location = this.awsService.getPreSignedUrl(key, mimeType, generateSignedUrlDto.access);
            const createUploadDto = new create_upload_dto_1.CreateUploadDto();
            createUploadDto.access = generateSignedUrlDto.access;
            createUploadDto.key = key;
            createUploadDto.name = fileName;
            createUploadDto.type = mimeType;
            createUploadDto.location = util_service_1.UtilService.removeQueryString(s3Location);
            const createdUpload = await new this.uploadModel(createUploadDto).save();
            return {
                CreatedBy: createUploadDto.CreatedBy,
                access: createdUpload.access,
                key: createdUpload.key,
                name: createdUpload.name,
                type: createdUpload.type,
                location: s3Location
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException("File could not be uploaded");
        }
    }
    findAll(where = {}) {
        return this.uploadModel.find(where).exec();
    }
    findOne(id) {
        return this.uploadModel.findById(id).exec();
    }
    async setInUse(location) {
        try {
            let locations = [];
            if (typeof location === "string")
                locations.push(location);
            else
                locations = location;
            await this.uploadModel.updateMany({ location: { $in: locations } }, { inUse: true });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async removeFromUse(location) {
        try {
            const foundRecord = await this.uploadModel.findOne()
                .where({ location: location }).exec();
            if (!foundRecord)
                return true;
            await this.remove(foundRecord._id);
            this.awsService.deleteObject(foundRecord.key);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async removeMultiFromUse(location) {
        try {
            const foundRecords = await this.uploadModel.find()
                .where({ location: { $in: location } }).exec();
            if (!foundRecords || !foundRecords.length)
                return true;
            await this.removeMany(foundRecords.map(x => x._id));
            this.awsService.deleteObjects(foundRecords.map(x => x.key));
            return true;
        }
        catch (error) {
            return false;
        }
    }
    remove(id) {
        return this.uploadModel.deleteOne({ _id: id }).exec();
    }
    removeMany(ids) {
        return this.uploadModel.deleteMany({ _id: { $in: ids } }).exec();
    }
};
UploadService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(upload_entity_1.UploadTemp.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        aws_service_1.AwsService])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map