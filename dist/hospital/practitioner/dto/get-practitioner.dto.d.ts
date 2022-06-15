import { GetApiDto } from "src/shared/dto";
export declare class GetPractitionerDto extends GetApiDto {
    DentistId: string;
    HospitalId: string;
    approvedBy: string;
    createdBy: string;
    deletedBy: string;
    constructor();
}
