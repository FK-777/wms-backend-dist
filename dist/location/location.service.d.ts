import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Model } from "mongoose";
import { LocationDocument } from "src/location/entities/location.entity";
export declare class LocationService {
    private readonly locationModel;
    constructor(locationModel: Model<LocationDocument>);
    create(createLocationDto: CreateLocationDto): Promise<LocationDocument>;
    findAll(where?: {}): Promise<LocationDocument[]>;
    findOne(id: string): Promise<LocationDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    update(id: string, updateLocationDto: UpdateLocationDto): Promise<import("mongodb").UpdateResult>;
}
