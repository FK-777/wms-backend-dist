import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    create(createLocationDto: CreateLocationDto): Promise<import("./entities/location.entity").LocationDocument>;
    findAll(): Promise<import("./entities/location.entity").LocationDocument[]>;
    findOne(id: string): Promise<import("./entities/location.entity").LocationDocument>;
    update(id: string, updateLocationDto: UpdateLocationDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
