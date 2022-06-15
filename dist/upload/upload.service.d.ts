import { Model, Schema as MongooseSchema } from "mongoose";
import { AwsService } from "src/shared/services/aws/aws.service";
import { GenerateSignedUrlDto } from "./dto/generate-signed-url.dto";
import { UploadTemp, UploadTempDocument } from "./entities/upload.entity";
export declare class UploadService {
    private readonly uploadModel;
    private awsService;
    constructor(uploadModel: Model<UploadTempDocument>, awsService: AwsService);
    create(generateSignedUrlDto: GenerateSignedUrlDto, UserId: any): Promise<{
        CreatedBy: MongooseSchema.Types.ObjectId;
        access: string;
        key: string;
        name: string;
        type: string;
        location: string;
    }>;
    findAll(where?: {}): Promise<(import("mongoose").Document<any, any, UploadTempDocument> & UploadTemp & Document)[]>;
    findOne(id: string): Promise<import("mongoose").Document<any, any, UploadTempDocument> & UploadTemp & Document>;
    setInUse(location: string | string[]): Promise<boolean | UploadTemp>;
    removeFromUse(location: string): Promise<boolean>;
    removeMultiFromUse(location: string[]): Promise<boolean>;
    private remove;
    private removeMany;
}
