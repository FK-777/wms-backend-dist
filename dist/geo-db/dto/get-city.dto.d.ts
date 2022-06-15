import { GetApiDto } from "src/shared/dto";
export declare class GetCityDto extends GetApiDto {
    country: string;
    countryIso: string;
    state: string;
    stateCode: string;
    constructor();
}
