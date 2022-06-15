import { Model } from 'mongoose';
import { CreateDentistDto } from './dto/create-dentist.dto';
import { GetDentistDto } from './dto/get-dentist.dto';
import { UpdateDentistDto } from './dto/update-dentist.dto';
import { DentistDocument } from './entities/dentist.entity';
export declare class DentistService {
    private readonly DentistModel;
    constructor(DentistModel: Model<DentistDocument>);
    create(createDentistDto: CreateDentistDto): Promise<DentistDocument>;
    findAll(getDentistDto: GetDentistDto): any[] | Promise<DentistDocument[]>;
    findOne(id: string): Promise<DentistDocument>;
    update(id: string, updateDentistDto: UpdateDentistDto): Promise<string>;
    remove(id: string): Promise<string>;
}
