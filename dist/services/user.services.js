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
const User_1 = require("../entity/User");
const nodemailer = __importStar(require("nodemailer"));
const qr = __importStar(require("qrcode"));
const Muser_1 = require("../entity/Muser");
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "78f47297fb1cf6",
        pass: "b3bf3b5877ff01",
    },
});
module.exports = (app, connection) => {
    app.post("/users/register", (req, res) => {
        const user = Object.assign(new User_1.User(), req.body);
        user.approve = false;
        connection.getRepository(User_1.User).save(user);
        res.type("json").status(201).send(user);
    });
    app.post("/users/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const username = req.body.username;
        const password = req.body.password;
        const user = yield connection
            .getRepository(Muser_1.Muser)
            .findOne({ where: { username } });
        if (user === undefined) {
            res.status(400).json({ message: "User not found or approval pending" });
        }
        if (user.password === password) {
            if (user.approve) {
                res.type("json").status(201).send(user);
            }
            else {
                res.status(400).json({ message: "Not authorized to login" });
            }
        }
        else {
            res.status(400).json({ message: "Username or password is incorrect" });
        }
    }));
    app.get("/users/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield connection.getRepository(User_1.User).find();
        res.send(users);
    }));
    app.get("/users/musers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield connection.getRepository(Muser_1.Muser).find();
        res.send(users);
    }));
    app.post("/users/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = Object.assign(new Muser_1.Muser(), req.body);
        const _user = yield connection
            .getRepository(Muser_1.Muser)
            .findOne({ where: { username: user.username } });
        if (_user !== undefined) {
            connection.getRepository(Muser_1.Muser).delete(_user);
        }
        else {
            res.status(400).json({ message: "User dosent exist" });
        }
    }));
    app.post("/users/disapprove", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = Object.assign(new User_1.User(), req.body);
        const _user = yield connection
            .getRepository(User_1.User)
            .findOne({ where: { username: user.username } });
        if (_user !== undefined) {
            connection.getRepository(User_1.User).delete(_user);
        }
        else {
            res.status(400).json({ message: "User doesnt exist" });
        }
    }));
    app.post("/users/approve", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const muser = Object.assign(new Muser_1.Muser(), req.body);
        muser.approve = true;
        connection.getRepository(Muser_1.Muser).save(muser);
        const user = Object.assign(new User_1.User(), req.body);
        const _user = yield connection
            .getRepository(User_1.User)
            .findOne({ where: { username: user.username } });
        if (_user !== undefined) {
            connection.getRepository(User_1.User).delete(_user);
        }
        else {
            res.status(400).json({ message: "User " });
        }
        res.type("json").status(201).send(muser);
        // const users: User | undefined = await connection.getRepository(User).findOne({where:{
        //     username:req.body.username
        // }})
        //     users!.approve = true
        //     const _users: User | undefined = await connection.getRepository(User).save(users!)
        const vismessage = {
            from: "admin@nuevezo.com",
            to: req.body.username,
            subject: "Approve to login",
            text: `Drea sir/Madam,
                   You are approver to login to the host app. `,
        };
        transport.sendMail(vismessage, (err, info) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(info);
            }
        });
    }));
    app.post("/users/sendmail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const email = req.body.email;
        const unumber = req.body.number;
        const stamp = Date.now();
        const cdata = email + "," + unumber + "," + stamp;
        qr.toDataURL(cdata, (error, src) => {
            console.log(src);
            const message = {
                from: "admin@nuevezo.com",
                to: email,
                subject: "Kiosk Qrcode",
                html: '<h1>Here is your Qrcode,</h1><p> <img src="' + src + '"> </p>',
            };
            transport.sendMail(message, (err, info) => {
                if (err) {
                    res.sendStatus(500);
                    res.send(error.message);
                    console.log(err);
                }
                else {
                    res.send("QR sent");
                    console.log(info);
                }
            });
        });
    }));
};
//# sourceMappingURL=user.services.js.map