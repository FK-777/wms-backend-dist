/// <reference types="mongoose" />
export declare class Education {
    title: string;
    institute: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
}
export declare const EducationSchema: import("mongoose").Schema<import("mongoose").Document<Education, any, any>, import("mongoose").Model<import("mongoose").Document<Education, any, any>, any, any>, {}>;
