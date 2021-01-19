import { Application } from "express";
import express from "express";
module.exports = (app: Application) => {
  app.use("/visitorkiosk", express.static("visitorkiosk"));
  app.use("/covidq", express.static("covidq"));
  app.use("/hostapp", express.static("hostapp"));
  app.use("/admin", express.static("admin"));
};
