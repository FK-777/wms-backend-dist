export declare class EmailService {
    domain: string;
    constructor();
    loadTemplate(identifier: string, data?: object): string;
    send(toEmail: string, subject: string, textMessage: string, htmlPage: string): Promise<void>;
}
