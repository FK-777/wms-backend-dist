/// <reference types="node" />
import { ConfigService } from "@nestjs/config";
import * as AWS from "aws-sdk";
export declare class AwsService {
    private configService;
    S3: AWS.S3;
    constructor(configService: ConfigService);
    uploadFile(file: Buffer, name: string, config?: {}): Promise<AWS.S3.ManagedUpload.SendData>;
    getPresignedUrl(key: string, expires?: number): string;
    getPreSignedUrl(key: string, contentType: string, acl?: string, expires?: number, params?: {}): string;
    deleteObject(key: string): AWS.Request<AWS.S3.DeleteObjectOutput, AWS.AWSError>;
    deleteObjects(keys: string[]): AWS.Request<AWS.S3.DeleteObjectsOutput, AWS.AWSError>;
}
