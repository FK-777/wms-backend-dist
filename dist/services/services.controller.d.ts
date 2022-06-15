import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { IdRequiredDto } from 'src/shared/dto';
import { GetServiceDto } from './dto/get-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto): Promise<import("./entities/service.entity").ServiceDocument>;
    findAll(getServiceDto: GetServiceDto): any[] | Promise<import("./entities/service.entity").ServiceDocument[]>;
    findOne({ id }: IdRequiredDto): Promise<import("./entities/service.entity").ServiceDocument>;
    update({ id }: IdRequiredDto, updateServiceDto: UpdateServiceDto): Promise<boolean>;
    remove({ id }: IdRequiredDto): Promise<boolean>;
}
