"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("../entity/Admin");
const bcrypt = __importStar(require("bcrypt"));
module.exports = (app, connection) => {
    app.post("/admin/register", (req, res) => {
        const user = Object.assign(new Admin_1.Admin(), req.body);
        user.approve = false;
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                res.status(500).send("Internal server error");
            }
            bcrypt.hash(req.body.password, salt, (error, hash) => {
                user.password = hash;
                if (error) {
                    res.status(500).send("hash error");
                }
                connection.getRepository(Admin_1.Admin).save(user);
                res.type("json").status(201).send(user);
            });
        });
    });
    app.post("/admin/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const username = req.body.username;
        const password = req.body.password;
        const user = yield connection
            .getRepository(Admin_1.Admin)
            .findOne({ where: { username } });
        if (user === undefined) {
            res.status(400).json({ message: "User not found or approval pending" });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.type("json").status(201).send(user);
            }
            else {
                res.status(400).json({ message: "Username or password is incorrect" });
            }
            if (err) {
                res.status(500).send("Unknown error found");
            }
        });
    }));
};
//# sourceMappingURL=Admin.services.js.map