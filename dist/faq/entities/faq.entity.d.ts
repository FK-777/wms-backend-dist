import { text } from "aws-sdk/clients/customerprofiles";
import { Document } from "mongoose";
export declare type FaqDocument = Faq & Document;
export declare class Faq {
    question: string;
    answer: text;
}
export declare const FaqSchema: import("mongoose").Schema<Document<Faq, any, any>, import("mongoose").Model<Document<Faq, any, any>, any, any>, {}>;
