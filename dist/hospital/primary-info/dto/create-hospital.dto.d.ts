import { Schema as MongooseSchema } from "mongoose";
import { SeoDto } from "src/shared/dto";
import { CreateServiceDto } from "./create-service.dto";
export declare class CreateHospitalDto {
    name: string;
    CategoryIds: Array<MongooseSchema.Types.ObjectId>;
    CityId: MongooseSchema.Types.ObjectId;
    address: string;
    thumbnail: string;
    description: string;
    phone: string;
    AdminId: MongooseSchema.Types.ObjectId;
    slug: string;
    seo: SeoDto;
    services: Array<CreateServiceDto>;
    images: Array<string>;
}
