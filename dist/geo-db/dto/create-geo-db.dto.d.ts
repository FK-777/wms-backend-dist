export declare class CreateCountryDto {
    name: string;
    iso: string;
    flag: string;
    location?: {
        name: string;
        coordinates: Array<Number>;
    };
}
export declare class CreateStateDto {
    name: string;
    code: string;
    countryIso: string;
    CountryId: string;
    location?: {
        name: string;
        coordinates: Array<Number>;
    };
}
export declare class CreateCityDto {
    name: string;
    stateCode: string;
    StateId: string;
    countryIso: string;
    CountryId: string;
    location?: {
        name: string;
        coordinates: Array<Number>;
    };
}
