import { Document, Schema as MongooseSchema } from "mongoose";
import { Experience } from "../../experience/entities/experience.entity";
import { Education } from "../../education/entities/education.entity";
import { Achievement } from "../../achievement/entities/achievement.entity";
export declare type DentistDocument = Dentist & Document;
export declare class Dentist {
    fName: string;
    lName: string;
    educationTagline: string;
    specializationTagline: string;
    phone: string;
    profilePicture: string;
    description: string;
    slug: string;
    CityId: MongooseSchema.Types.ObjectId;
    address: string;
    skills: Array<string>;
    CategoryIds: MongooseSchema.Types.ObjectId[];
    experience: Array<Experience>;
    education: Array<Education>;
    achievements: Array<Achievement>;
    isVerified: string;
}
export declare const DentistSchema: MongooseSchema<Document<Dentist, any, any>, import("mongoose").Model<Document<Dentist, any, any>, any, any>, {}>;
