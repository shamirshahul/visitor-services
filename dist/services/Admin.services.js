"use strict";
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
module.exports = (app, connection) => {
    app.post("/admin/register", (req, res) => {
        const user = Object.assign(new Admin_1.Admin(), req.body);
        user.approve = false;
        connection.getRepository(Admin_1.Admin).save(user);
        res.type("json").status(201).send(user);
    });
    app.post("/admin/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const username = req.body.username;
        const password = req.body.password;
        const user = yield connection
            .getRepository(Admin_1.Admin)
            .findOne({ where: { username } });
        if (user === undefined) {
            res.status(400).json({ message: "Admin not found " });
        }
        if (user.password === password) {
            res.type("json").status(201).send(user);
        }
        else {
            console.log(user);
            res.status(400).json({ message: "Username or password is incorrect" });
        }
    }));
};
//# sourceMappingURL=Admin.services.js.map