import { Application } from "express";
import { User } from "../entity/User";
import { Connection } from "typeorm";
import * as nodemailer from "nodemailer";
import * as qr from "qrcode";
import { Muser } from "../entity/Muser";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "78f47297fb1cf6",
    pass: "b3bf3b5877ff01",
  },
});

module.exports = (app: Application, connection: Connection) => {
  app.post("/users/register", (req, res) => {
    const user = Object.assign(new User(), req.body);
    user.approve = false;
    connection.getRepository(User).save(user);
    res.type("json").status(201).send(user);
  });

  app.post("/users/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user: Muser | undefined = await connection
      .getRepository(Muser)
      .findOne({ where: { username } });
    if (user === undefined) {
      res.status(400).json({ message: "User not found or approval pending" });
    }
    if (user!.password === password) {
      if (user!.approve) {
        res.type("json").status(201).send(user);
      } else {
        res.status(400).json({ message: "Not authorized to login" });
      }
    } else {
      res.status(400).json({ message: "Username or password is incorrect" });
    }
  });

  app.get("/users/all", async (req, res) => {
    const users: User[] = await connection.getRepository(User).find();
    res.send(users);
  });

  app.get("/users/musers", async (req, res) => {
    const users: Muser[] = await connection.getRepository(Muser).find();
    res.send(users);
  });

  app.post("/users/delete", async (req, res) => {
    const user: Muser = Object.assign(new Muser(), req.body);
    const _user: Muser | undefined = await connection
      .getRepository(Muser)
      .findOne({ where: { username: user.username } });
    if (_user !== undefined) {
      connection.getRepository(Muser).delete(_user!);
    } else {
      res.status(400).json({ message: "User dosent exist" });
    }
  });

  app.post("/users/disapprove", async (req, res) => {
    const user: User = Object.assign(new User(), req.body);
    const _user: User | undefined = await connection
      .getRepository(User)
      .findOne({ where: { username: user.username } });
    if (_user !== undefined) {
      connection.getRepository(User).delete(_user!);
    } else {
      res.status(400).json({ message: "User doesnt exist" });
    }
  });

  app.post("/users/approve", async (req, res) => {
    const muser: Muser = Object.assign(new Muser(), req.body);
    muser.approve = true;
    connection.getRepository(Muser).save(muser);

    const user: User = Object.assign(new User(), req.body);
    const _user: User | undefined = await connection
      .getRepository(User)
      .findOne({ where: { username: user.username } });
    if (_user !== undefined) {
      connection.getRepository(User).delete(_user!);
    } else {
      res.status(400).json({ message: "User " });
    }
    res.type("json").status(201).send(muser);

    // const users: User | undefined = await connection.getRepository(User).findOne({where:{
    //     username:req.body.username
    // }})
    //     users!.approve = true
    //     const _users: User | undefined = await connection.getRepository(User).save(users!)

    const vismessage = {
      from: "admin@nuevezo.com", // Sender address
      to: req.body.username, // List of recipients
      subject: "Approve to login", // Subject line
      text: `Drea sir/Madam,
                   You are approver to login to the host app. `, // Plain text body
    };
    transport.sendMail(vismessage, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  });

  app.post("/users/sendmail", async (req, res) => {
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
        } else {
          res.send("QR sent");
          console.log(info);
        }
      });
    });
  });
};
