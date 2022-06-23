"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose.Schema({
    fName: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: false,
    },
    lName: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: false,
    },
    designation: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: false,
    },
    officeName: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: false,
    },
    email: {
        type: String,
        lowercase: true,
        maxlength: 255,
        minlength: 6,
        required: true,
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: true,
    },
    phone: {
        type: String,
        maxlength: 32,
    },
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    pin: {
        type: Number,
    },
    university: {
        type: String,
        maxlength: 32,
    },
    pNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
        maxlength: 32,
    },
    profilePicture: {
        type: String,
        minlength: 2,
        maxlength: 255,
    },
    termAndCondition: {
        type: Boolean,
        default: false,
    },
    RoleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    verification: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: true,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    verificationExpires: {
        type: Date,
        default: Date.now,
    },
    loginAttempts: {
        type: Number,
        default: 0,
    },
    info: {
        type: Object
    },
    OfficeId: {
        type: mongoose.Schema.Types.ObjectId
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.UserSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
    }
    catch (err) {
        return next(err);
    }
});
//# sourceMappingURL=user.entity.js.map