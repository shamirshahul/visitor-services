"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
module.exports = (app) => {
    app.use("/visitorkiosk", express_1.default.static("visitorkiosk"));
    app.use("/covidq", express_1.default.static("covidq"));
    app.use("/hostapp", express_1.default.static("hostapp"));
    app.use("/admin", express_1.default.static("admin"));
};
//# sourceMappingURL=static.services.js.map