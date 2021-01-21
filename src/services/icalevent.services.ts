import { Application } from "express";
import { Connection } from "typeorm";
import * as nodemailer from "nodemailer";
import * as fs from "fs";
import ical from "ical-generator";
import moment from "moment";
import { ICalEvent } from "ical-generator";

module.exports = (app: Application, connection: Connection) => {
  if (!fs.existsSync("./cals")) {
    fs.mkdirSync("./cals");
  }

  app.post("/calendar", (req, res) => {
    const cal = ical({ domain: "nuevezo.com", name: "my first iCal" });
    cal.prodId({
      company: "Nuevezo",
      product: "One Platform",
      language: "EN",
    });

    cal.save("cals/cal.ics", () => {
      console.log("cal created");
    });
    res.send(cal);
  });

  app.post("/event", (req, res) => {
    const cal = ical().url("calendars/cal.ics");
    const event: ICalEvent = cal
      .createEvent({
        start: moment(),
        end: moment().add(3, "hour"),
        summary: "Example Event",
        description: "It works ;)",
        location: "my room",
        url: "https://nuevezo.com/",
      })
      .attendees([
        { email: "rishabh@nuevezo.com", name: "Person A" },
        { email: "drake.sharke@gmail.com", name: "Person B" },
      ]);
    cal.save("cals/cal.ics", () => {
      console.log("cal created");
    });
    res.send(event);
  });
};
