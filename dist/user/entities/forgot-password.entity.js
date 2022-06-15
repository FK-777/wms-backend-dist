"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ForgotPasswordSchema = new mongoose_1.Schema({
    email: {
        required: [true, "EMAIL_IS_BLANK"],
        type: String,
    },
    verification: {
        type: String,
        required: true,
    },
    firstUsed: {
        type: Boolean,
        default: false,
    },
    finalUsed: {
        type: Boolean,
        default: false,
    },
    expires: {
        type: Date,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
    browser: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    ipChanged: {
        type: String,
    },
    browserChanged: {
        type: String,
    },
    countryChanged: {
        type: String,
    },
}, {
    versionKey: false,
    timestamps: true,
});
//# sourceMappingURL=forgot-password.entity.js.map