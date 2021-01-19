import { Guest } from "../entity/Guest";
import { Application } from "express";
import { Connection } from "typeorm";
import * as nodemailer from "nodemailer";
import * as fs from "fs";
import * as path from "path";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "78f47297fb1cf6",
    pass: "b3bf3b5877ff01",
  },
});

module.exports = (app: Application, connection: Connection) => {
  app.post("/guest/create", (req, res) => {
    console.log(req.body);
    const guest = Object.assign(new Guest(), req.body);
    connection.getRepository(Guest).save(guest);
    res.type("json").status(201).send(guest);

    if (req.body.covid === "yes") {
      console.log("WARNING");

      const vismessage = {
        from: "admin@nuevezo.com", // Sender address
        to: req.body.email, // List of recipients
        subject: "sorry you cannot attend the meeting", // Subject line
        text: "please remain home", // Plain text body
      };
      transport.sendMail(vismessage, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });

      const orgmessage = {
        from: "admin@nuevezo.com", // Sender address
        to: req.body.organizermail, // List of recipients
        subject: req.body.email + " cannot attend the meeting", // Subject line
        text: "meeting is canceled for " + req.body.email, // Plain text body
      };
      transport.sendMail(orgmessage, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    } else {
      console.log("SAFE");

      const message = {
        from: "admin@nuevezo.com", // Sender address
        to: req.body.email, // List of recipients
        subject: "Your meeting is confirmed", // Subject line
        text: "Dear sir your meeting is conformed", // Plain text body
      };
      transport.sendMail(message, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });

      const omessage = {
        from: "admin@nuevezo.com", // Sender address
        to: req.body.organizermail, // List of recipients
        subject: req.body.email + " has confirmed for the meeting", // Subject line
        text: "meeting is confirmed for the meeting " + req.body.email, // Plain text body
      };
      transport.sendMail(omessage, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    }
  });

  app.get("/guest/findall", async (req, res) => {
    const email = req.query.email;
    const guest: Guest | string =
      (await connection.getRepository(Guest).findOne({
        where: {
          email,
        },
      })) || "No Guest found";
    res.send(guest);
  });

  app.get("/guest/all", async (req, res) => {
    const guest: Guest[] = await connection.getRepository(Guest).find();
    res.send(guest);
  });

  app.get("/guest/blocked", async (req, res) => {
    const guest: Guest[] = await connection.getRepository(Guest).find({
      where: {
        blocked: true,
      },
    });
    res.send(guest);
  });

  app.put("/guest/block", async (req, res) => {
    const guest: Guest | undefined = await connection
      .getRepository(Guest)
      .findOne({
        where: {
          email: req.body.email,
        },
      });
    if (guest !== undefined) {
      guest.blocked = true;
      guest.blocker = req.body.bemail;
      const _guest: Guest | undefined = await connection
        .getRepository(Guest)
        .save(guest);
      if (_guest !== undefined) {
        res.type("json");
        res.send(_guest);
      }
    } else {
      res.type("json");
      res.send({ response: "guest doesnot exist" });
    }
  });

  app.put("/guest/unblock", async (req, res) => {
    const guest: Guest | undefined = await connection
      .getRepository(Guest)
      .findOne({
        where: {
          email: req.body.email,
        },
      });
    if (guest !== undefined) {
      guest.blocked = false;
      const _guest: Guest | undefined = await connection
        .getRepository(Guest)
        .save(guest);
      if (_guest !== undefined) {
        res.type("json");
        res.send(_guest);
      }
    } else {
      res.type("json");
      res.send({ response: "guest doesnot exist" });
    }
  });

  app.post("/visitorcheck", async (req, res) => {
    const guest: Guest | undefined = await connection
      .getRepository(Guest)
      .findOne({
        where: {
          email: req.body.email,
        },
      });
    if (guest !== undefined) {
      guest.status = "checkein";
      guest.checkin = req.body.checkin;
      guest.eventid = req.body.eventid;
      const _guest: Guest | undefined = await connection
        .getRepository(Guest)
        .save(guest);
    }
    console.log(guest);
    res.send(JSON.stringify(guest));
  });

  app.post("/visitorcheckout", async (req, res) => {
    const guest: Guest | undefined = await connection
      .getRepository(Guest)
      .findOne({
        where: {
          email: req.body.email,
        },
      });
    if (guest !== undefined) {
      guest.status = "checkedout";
      guest.checkout = req.body.checkout;
      const _guest: Guest | undefined = await connection
        .getRepository(Guest)
        .save(guest);
      res.send(JSON.stringify(guest));
    } else {
      res.send(JSON.stringify("cannot checkout"));
    }
  });

  app.post("/photo", async (req, res) => {
    const post = req.body.photo;
    const emailid = req.body.email;
    const event = req.body.eventid;
    const data = post.replace(/^data:image\/\w+;base64,/, "");
    const buf = Buffer.from(data, "base64");
    writeFileToSystem(buf, emailid, event);
  });
};

function writeFileToSystem(buf: any, emailid: string, event: string) {
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
