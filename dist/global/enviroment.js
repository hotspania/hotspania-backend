"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWS_REGION_VALUE = exports.AWS_SECRET_KEY_VALUE = exports.AWS_KEY_VALUE = exports.SEED = exports.CADUCIDAD_TOKEN = exports.UPLOADFOLDER = exports.DBURL2 = exports.DBURL = exports.SERVER_PORT = void 0;
exports.SERVER_PORT = Number(process.env.PORT) || 3500;
exports.DBURL = 'mongodb://localhost:27017/relax';
exports.DBURL2 = 'mongodb://localhost:27017/narnia';
exports.UPLOADFOLDER = "uploads";
exports.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
exports.SEED = 'h6Wq1qlHX94Bh+IB0/9qc9uXHH+0YfXZJ3FjsJn4jww=';
exports.AWS_KEY_VALUE = process.env.AWS_KEY_VALUE || 'AKIATUMAEUQ2FP3IDAQU';
exports.AWS_SECRET_KEY_VALUE = process.env.AWS_SECRET_KEY_VALUE || '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';
exports.AWS_REGION_VALUE = process.env.AWS_REGION_VALUE || 'us-east-2';