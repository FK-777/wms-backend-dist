export declare class UtilService {
    static removeFile(file: string): true | void;
    static removeFiles(files: Array<string>): Boolean;
    static generateAnId(length: number, characters?: string): string;
    static cleanAndUniqueFileName(fileName: string): string;
    static createSlug(title: string): string;
    static arrayDiff(a: string[], b: string[]): string[];
    static removeQueryString(url: string): string;
}
