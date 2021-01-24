import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createConnection()
  .then(async (connection) => {
    require("./services/qr-services")(app, connection);
    require("./services/user.services")(app, connection);
    require("./services/static.services")(app);
    require("./services/Admin.services")(app, connection);
    require("./services/eventTemplate.services")(app, connection);
  })
  .catch((error) => console.log(error));

app.listen(parseInt(process.env.PORT!, 10), "0.0.0.0");
