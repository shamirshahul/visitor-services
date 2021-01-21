import { IcalEvent } from "../entity/Icalevent";
import { Application } from "express";
import { Connection } from "typeorm";
import * as nodemailer from "nodemailer";
import * as fs from "fs";
import ical from "ical-generator";
import moment from "moment";

module.exports = (app: Application, connection: Connection) => {
  app.post("/calendar", (req, res) => {
    const cal = ical({ domain: "nuevezo.com", name: "my first iCal" });
    cal.save(`${__dirname}/cals/cal.ical`, () => {
      res.send("calendar created");
    });
    // cal.createEvent({
    //   start: moment(),
    //   end: moment().add(1, "hour"),
    //   summary: "Example Event",
    //   description: "It works ;)",
    //   location: "my room",
    //   url: "https://nuevezo.com/",
    // });
  });
};
