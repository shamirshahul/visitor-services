import { Admin } from "../entity/Admin";
import { Application } from "express";
import { Connection } from "typeorm";

module.exports = (app: Application, connection: Connection) => {
  app.post("/admin/register", (req, res) => {
    const user = Object.assign(new Admin(), req.body);
    user.approve = false;
    connection.getRepository(Admin).save(user);
    res.type("json").status(201).send(user);
  });

  app.post("/admin/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user: Admin | undefined = await connection
      .getRepository(Admin)
      .findOne({ where: { username } });
    if (user === undefined) {
      res.status(400).json({ message: "Admin not found " });
    }
    if (user!.password === password) {
      res.type("json").status(201).send(user);
    } else {
      console.log(user);
      res.status(400).json({ message: "Username or password is incorrect" });
    }
  });
};
