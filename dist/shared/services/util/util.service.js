"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const Url = require("url");
let UtilService = class UtilService {
    static removeFile(file) {
        if (!file) {
            return true;
        }
        if (!fs.existsSync(file)) {
            return true;
        }
        return fs.unlink(file, (err) => {
            if (err) {
                return false;
            }
            return true;
        });
    }
    static removeFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            this.removeFile(file);
        }
        return true;
    }
    static generateAnId(length, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
        let result = "";
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    static cleanAndUniqueFileName(fileName) {
        const fileNameArray = fileName.split(".");
        const ext = fileNameArray[fileNameArray.length - 1];
        fileNameArray.pop();
        const fileNameOnly = fileNameArray.join("-")
            .replace(/[^A-Z0-9]+/ig, "_")
            .slice(0, 200);
        const newName = fileNameOnly + "_" + Date.now() + "." + ext;
        return newName;
    }
    static createSlug(title) {
        return title.replace(/[^A-Z0-9]+/ig, "-").slice(0, 200);
    }
    static arrayDiff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
    static removeQueryString(url) {
        return Url.format(new URL(url), { search: false });
    }
};
UtilService = __decorate([
    common_1.Injectable()
], UtilService);
exports.UtilService = UtilService;
//# sourceMappingURL=util.service.js.map