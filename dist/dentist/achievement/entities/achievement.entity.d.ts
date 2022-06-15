/// <reference types="mongoose" />
export declare class Achievement {
    title: string;
    description: string;
    attachment: string;
    date: Date;
}
export declare const AchievementSchema: import("mongoose").Schema<import("mongoose").Document<Achievement, any, any>, import("mongoose").Model<import("mongoose").Document<Achievement, any, any>, any, any>, {}>;
