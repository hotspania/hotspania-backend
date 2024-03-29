"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tag = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'user'
    },
    titulo: {
        type: String,
        lowercase: true
    },
    creado: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});
exports.default = (0, mongoose_1.model)('tag', tag);
