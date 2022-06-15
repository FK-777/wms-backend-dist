"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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');
let EmailService = class EmailService {
    constructor() {
        this.domain = "http://localhost:4200";
        if (process.env.NODE_ENV == "staging") {
            this.domain = "http://localhost:4200";
        }
        else if (process.env.NODE_ENV == "production") {
            this.domain = "http://localhost:4200";
        }
        else {
            this.domain = "http://localhost:4200";
        }
    }
    loadTemplate(identifier, data = {}) {
        switch (identifier) {
            case "account-verification": {
                const link = this.domain + "/employees/verify-account/" + data[`verification`];
                return `
          <h1>Hello! Greetings of the day.</h1>
          Please click on the link to verify your account<br>
          <a href="${link}">${link}</a>
        `;
            }
            case "forgot-password": {
                const link = this.domain + "/auth/reset-password/" + data[`email`] + "/" + data[`verification`];
                return `
          <h1>Hello! Greetings of the day.</h1>
          Please click on the link to set new password for  your account<br>
          <a href="${link}">${link}</a>
        `;
            }
            default:
                break;
        }
    }
    send(toEmail, subject, textMessage, htmlPage) {
        return sgMail
            .send({
            from: 'cap.instruments@gmail.com',
            to: toEmail,
            subject: subject,
            text: textMessage,
            html: htmlPage,
        })
            .then((response) => {
            console.log(response[0].statusCode);
            console.log(response[0].headers);
        })
            .catch((error) => {
            console.error(error);
        });
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map