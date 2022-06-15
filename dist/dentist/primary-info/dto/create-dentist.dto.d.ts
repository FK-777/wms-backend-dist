import { Schema as MongooseSchema } from "mongoose";
import { CreateAchievementDto } from "src/dentist/achievement/dto/create-achievement.dto";
import { CreateEducationDto } from "src/dentist/education/dto/create-education.dto";
import { CreateExperienceDto } from "src/dentist/experience/dto/create-experience.dto";
export declare class CreateDentistDto {
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
    CategoryIds: Array<MongooseSchema.Types.ObjectId>;
    experience: Array<CreateExperienceDto>;
    education: Array<CreateEducationDto>;
    achievements: Array<CreateAchievementDto>;
}
