"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user = new mongoose_1.Schema({
    realData: {
        nombre: {
            type: String,
            lowercase: true
        },
        dni: {
            type: String,
            lowercase: true
        },
        telefono: {
            type: String,
            lowercase: true
        },
        fecha_nacimiento: String,
        dnipicture: String,
    },
    fakeData: {
        username: {
            type: String,
            lowercase: true
        },
        edad: String,
        fumadora: String,
        atencion: [{}],
        tags: [{}],
        zonas: String,
        telefono: {
            type: String,
            lowercase: true
        },
        whatsapp: Number,
        llamadas: Number,
        busto: String,
        cintura: String,
        genero: String,
        estatura: String,
        peso: String,
        cadera: String,
        servicios: String,
        clase: String,
        inicio: String,
        fin: String,
        horario_inicio: String,
        horario_fin: String,
        city: {
            type: String,
            lowercase: true
        },
        zone: {
            type: String,
            lowercase: true
        },
        idioma: [{}],
    },
    email: {
        type: String,
        lowercase: true
    },
    pass: String,
    score: Number,
    activa: Number,
    fecha_creacion: {
        type: Date,
        default: Date.now,
    },
    status: { type: Number, default: 0 },
    auth: { type: Number, default: 0 },
    pin: Number,
    pagos: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "pagos",
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'profile'
    },
}, {
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("user", user);
