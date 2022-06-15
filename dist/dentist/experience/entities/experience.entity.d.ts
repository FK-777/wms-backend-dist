/// <reference types="mongoose" />
export declare class Experience {
    title: string;
    employerName: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
}
export declare const ExperienceSchema: import("mongoose").Schema<import("mongoose").Document<Experience, any, any>, import("mongoose").Model<import("mongoose").Document<Experience, any, any>, any, any>, {}>;
