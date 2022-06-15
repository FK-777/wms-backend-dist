import { Schema as MongooseSchema } from "mongoose";
export declare class CreateSampleDto {
    sampleType: string;
    isSmoker: boolean;
    photoTaken: boolean;
    fName: string;
    pNumber: number;
    cnic: number;
    sampleDate: Date;
    gender: string;
    caste: string;
    address: string;
    district: string;
    signature: string;
    weight: number;
    height: number;
    familyDisease: boolean;
    relationPreviousSample: boolean;
    healthy: boolean;
    age: boolean;
    received: boolean;
    resultAdded: boolean;
    parentFirstCousin: boolean;
    lan: number;
    lag: number;
    labName: string;
    barcode: string;
    UserId: MongooseSchema.Types.ObjectId;
}
