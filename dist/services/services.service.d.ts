import { Model } from 'mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { GetServiceDto } from './dto/get-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceDocument } from './entities/service.entity';
export declare class ServicesService {
    private readonly ServiceModel;
    constructor(ServiceModel: Model<ServiceDocument>);
    create(createServiceDto: CreateServiceDto): Promise<ServiceDocument>;
    findAll(getServiceDto: GetServiceDto): any[] | Promise<ServiceDocument[]>;
    findOne(id: string): Promise<ServiceDocument>;
    remove(id: string): Promise<boolean>;
    update(id: string, updateServiceDto: UpdateServiceDto): Promise<boolean>;
}
