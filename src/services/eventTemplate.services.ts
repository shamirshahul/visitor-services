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
    event.start = String(Date.parse(req.body.start) / 1000);
    event.end = String(Date.parse(req.body.end) / 100);
    console.log(req.body);
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
      console.log("stamp  " + stamp);
      console.log(req.body);
      const cdata = email + "," + stamp;
      qr.toDataURL(cdata, (error, src) => {
        console.log(src);

        const message = {
          from: "admin@nuevezo.com",
          to: email,
          subject: "Kiosk Qrcode",
          html: `<h1>Here is your Qrcode,</h1><p> <img src="${src}"> </p><a href="http://localhost:3000/covidq/?email=${email}&eventid=AAMkADVlNDY5MTIwLTIxN2UtNDA2MS1iMWUyLTQ2OTQ0NTI1Njc2MgBGAAAAAABkTB8o-3BgQLnfvnuZBFKcBwDP0DMzx6n8QrMKlRKiOuzsAAAAAAENAADP0DMzx6n8QrMKlRKiOuzsAAAVfd0FAAA=&stamp=${stamp}&org=${req.body.organizer.email}&location=${req.body.location}&starttime=${req.body.start}&endtime=${req.body.end}">Attend covid questionnaire and register</a>`,
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
