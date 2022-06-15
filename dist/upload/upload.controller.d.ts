/// <reference types="mongoose" />
import { UploadService } from "./upload.service";
import { GenerateSignedUrlDto } from "./dto/generate-signed-url.dto";
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    generatePresignedUrl(generateSignedUrlDto: GenerateSignedUrlDto, currentUser: any): Promise<{
        CreatedBy: import("mongoose").Schema.Types.ObjectId;
        access: string;
        key: string;
        name: string;
        type: string;
        location: string;
    }>;
}
