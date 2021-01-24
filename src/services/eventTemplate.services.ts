import { EventTemplate } from "../entity/EventTemplate";
import { Application } from "express";
import { Connection } from "typeorm";
import * as nodemailer from "nodemailer";
import * as qr from "qrcode";
import * as fs from "fs";
import ical from "ical-generator";
import moment from "moment";
import { ICalEvent } from "ical-generator";
import { EventAttendee } from "../entity/EventAttendee";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "78f47297fb1cf6",
    pass: "b3bf3b5877ff01",
  },
});

module.exports = (app: Application, connection: Connection) => {
  app.post("/event/create", (req, res) => {
    const event: EventTemplate = Object.assign(new EventTemplate(), req.body);
    connection.manager.save(event);

    const attendees: string[] = req.body.attendees.map(
      (attendee: { email: string }) => {
        return attendee.email;
      }
    );
    console.log(attendees);

    attendees.forEach((element) => {
      const email = element;
      const stamp = Date.now();
      console.log(req.body);
      const cdata = email + "," + stamp;
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
          } else {
            res.send("QR sent");
            console.log(info);
          }
        });
      });
    });

    res.type("json").status(201).send(event);
  });

  app.post("/event/qr", (req, res) => {
    console.log("qr event");
  });
};
