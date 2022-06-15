import { IdRequiredDto } from 'src/shared/dto';
import { DentistService } from './dentist.service';
import { CreateDentistDto } from './dto/create-dentist.dto';
import { GetDentistDto } from './dto/get-dentist.dto';
import { UpdateDentistDto } from './dto/update-dentist.dto';
export declare class DentistController {
    private readonly dentistService;
    constructor(dentistService: DentistService);
    create(createDentistDto: CreateDentistDto): Promise<import("./entities/dentist.entity").DentistDocument>;
    findAll(getDentistDto: GetDentistDto): any[] | Promise<import("./entities/dentist.entity").DentistDocument[]>;
    findOne({ id }: IdRequiredDto): Promise<import("./entities/dentist.entity").DentistDocument>;
    update({ id }: IdRequiredDto, updateDentistDto: UpdateDentistDto): Promise<string>;
    remove({ id }: IdRequiredDto): Promise<string>;
}
