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
exports.AwsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const AWS = require("aws-sdk");
let AwsService = class AwsService {
    constructor(configService) {
        this.configService = configService;
        this.S3 = new AWS.S3({
            accessKeyId: this.configService.get('accessKeyId'),
            secretAccessKey: this.configService.get('secretAccessKey'),
            region: this.configService.get('region'),
        });
    }
    uploadFile(file, name, config = {}) {
        const params = {
            Bucket: process.env.Bucket,
            Key: name,
            Body: file,
        };
        return this.S3.upload(Object.assign(Object.assign({}, params), config)).promise();
    }
    getPresignedUrl(key, expires = 60 * 10) {
        const s3Params = {
            Bucket: process.env.Bucket,
            Expires: expires,
            Key: key
        };
        return this.S3.getSignedUrl('getObject', s3Params);
    }
    getPreSignedUrl(key, contentType, acl = 'public-read', expires = 60 * 10, params = {}) {
        const s3Params = {
            Bucket: process.env.Bucket,
            Expires: expires,
            ACL: acl,
            Key: key,
            ContentType: contentType,
        };
        return this.S3.getSignedUrl('putObject', Object.assign(Object.assign({}, s3Params), params));
    }
    deleteObject(key) {
        const s3Params = {
            Bucket: process.env.Bucket,
            Key: key
        };
        return this.S3.deleteObject(s3Params);
    }
    deleteObjects(keys) {
        const objects = keys.map(key => {
            return {
                Key: key
            };
        });
        const s3Params = {
            Bucket: process.env.Bucket,
            Delete: {
                Objects: objects,
                Quiet: false
            }
        };
        return this.S3.deleteObjects(s3Params);
    }
};
AwsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsService);
exports.AwsService = AwsService;
//# sourceMappingURL=aws.service.js.map