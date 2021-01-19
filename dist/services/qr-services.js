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
const Guest_1 = require("../entity/Guest");
const nodemailer = __importStar(require("nodemailer"));
const fs = __importStar(require("fs"));
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "78f47297fb1cf6",
        pass: "b3bf3b5877ff01",
    },
});
module.exports = (app, connection) => {
    app.post("/guest/create", (req, res) => {
        console.log(req.body);
        const guest = Object.assign(new Guest_1.Guest(), req.body);
        connection.getRepository(Guest_1.Guest).save(guest);
        res.type("json").status(201).send(guest);
        if (req.body.covid === "yes") {
            console.log("WARNING");
            const vismessage = {
                from: "admin@nuevezo.com",
                to: req.body.email,
                subject: "sorry you cannot attend the meeting",
                text: "please remain home",
            };
            transport.sendMail(vismessage, (err, info) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(info);
                }
            });
            const orgmessage = {
                from: "admin@nuevezo.com",
                to: req.body.organizermail,
                subject: req.body.email + " cannot attend the meeting",
                text: "meeting is canceled for " + req.body.email,
            };
            transport.sendMail(orgmessage, (err, info) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(info);
                }
            });
        }
        else {
            console.log("SAFE");
            const message = {
                from: "admin@nuevezo.com",
                to: req.body.email,
                subject: "Your meeting is confirmed",
                text: "Dear sir your meeting is conformed",
            };
            transport.sendMail(message, (err, info) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(info);
                }
            });
            const omessage = {
                from: "admin@nuevezo.com",
                to: req.body.organizermail,
                subject: req.body.email + " has confirmed for the meeting",
                text: "meeting is confirmed for the meeting " + req.body.email,
            };
            transport.sendMail(omessage, (err, info) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(info);
                }
            });
        }
    });
    app.get("/guest/findall", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const email = req.query.email;
        const guest = (yield connection.getRepository(Guest_1.Guest).findOne({
            where: {
                email,
            },
        })) || "No Guest found";
        res.send(guest);
    }));
    app.get("/guest/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield connection.getRepository(Guest_1.Guest).find();
        res.send(guest);
    }));
    app.get("/guest/blocked", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield connection.getRepository(Guest_1.Guest).find({
            where: {
                blocked: true,
            },
        });
        res.send(guest);
    }));
    app.put("/guest/block", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield connection
            .getRepository(Guest_1.Guest)
            .findOne({
            where: {
                email: req.body.email,
            },
        });
        if (guest !== undefined) {
            guest.blocked = true;
            guest.blocker = req.body.bemail;
            const _guest = yield connection
                .getRepository(Guest_1.Guest)
                .save(guest);
            if (_guest !== undefined) {
                res.type("json");
                res.send(_guest);
            }
        }
        else {
            res.type("json");
            res.send({ response: "guest doesnot exist" });
        }
    }));
    app.put("/guest/unblock", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield connection
            .getRepository(Guest_1.Guest)
            .findOne({
            where: {
                email: req.body.email,
            },
        });
        if (guest !== undefined) {
            guest.blocked = false;
            const _guest = yield connection
                .getRepository(Guest_1.Guest)
                .save(guest);
            if (_guest !== undefined) {
                res.type("json");
                res.send(_guest);
            }
        }
        else {
            res.type("json");
            res.send({ response: "guest doesnot exist" });
        }
    }));
    app.post("/visitorcheck", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield connection
            .getRepository(Guest_1.Guest)
            .findOne({
            where: {
                email: req.body.email,
            },
        });
        if (guest !== undefined) {
            guest.status = "checkein";
            guest.checkin = req.body.checkin;
            guest.eventid = req.body.eventid;
            const _guest = yield connection
                .getRepository(Guest_1.Guest)
                .save(guest);
        }
        console.log(guest);
        res.send(JSON.stringify(guest));
    }));
    app.post("/visitorcheckout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const guest = yield connection
            .getRepository(Guest_1.Guest)
            .findOne({
            where: {
                email: req.body.email,
            },
        });
        if (guest !== undefined) {
            guest.status = "checkedout";
            guest.checkout = req.body.checkout;
            const _guest = yield connection
                .getRepository(Guest_1.Guest)
                .save(guest);
            res.send(JSON.stringify(guest));
        }
        else {
            res.send(JSON.stringify("cannot checkout"));
        }
    }));
    app.post("/photo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const post = req.body.photo;
        const emailid = req.body.email;
        const event = req.body.eventid;
        const data = post.replace(/^data:image\/\w+;base64,/, "");
        const buf = Buffer.from(data, "base64");
        writeFileToSystem(buf, emailid, event);
    }));
};
function writeFileToSystem(buf, emailid, event) {
    if (!fs.existsSync("./images")) {
        fs.mkdirSync("./images");
    }
    if (!fs.existsSync(`./images/${event}`)) {
        fs.mkdirSync(`./images/${event}`);
    }
    fs.writeFile(`./images/${event}/${emailid}.png`, buf, (err) => {
        console.log("The file was saved!");
    });
}
//# sourceMappingURL=qr-services.js.map