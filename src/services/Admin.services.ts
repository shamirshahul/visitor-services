import { Admin } from "../entity/Admin";
import { Application } from "express";
import { Connection } from "typeorm";
import * as bcrypt from "bcrypt";

module.exports = (app: Application, connection: Connection) => {
  app.post("/admin/register", (req, res) => {
    const user = Object.assign(new Admin(), req.body);
    user.approve = false;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        user.password = hash;
        connection.getRepository(Admin).save(user);
        res.type("json").status(201).send(user);
      });
    });
  });

  app.post("/admin/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user: Admin | undefined = await connection
      .getRepository(Admin)
      .findOne({ where: { username } });
    if (user === undefined) {
      res.status(400).json({ message: "User not found or approval pending" });
    }

    bcrypt.compare(password, user!.password, (err, result) => {
      if (result) {
        res.type("json").status(201).send(user);
      } else {
        res.status(400).json({ message: "Username or password is incorrect" });
      }
    });
  });
};
