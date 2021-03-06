import { Schema as MongooseSchema } from "mongoose";
export declare class CreateFamilyDto {
    sampleType: string;
    isSmoker: boolean;
    photoTaken: boolean;
    familyName: string;
    fName: string;
    pNumber: number;
    cnic: number;
    sampleDate: Date;
    gender: string;
    caste: string;
    address: string;
    district: string;
    weight: number;
    height: number;
    familyDisease: boolean;
    relationPreviousSample: boolean;
    healthy: boolean;
    relation: string;
    age: boolean;
    parentFirstCousin: boolean;
    lan: number;
    lag: number;
    labName: string;
    barcode: string;
    received: boolean;
    resultAdded: boolean;
    UserId: MongooseSchema.Types.ObjectId;
}
