import { Application } from "express";
import { Connection } from "typeorm";
import * as nodemailer from "nodemailer";
import * as fs from "fs";
import ical from "ical-generator";
import moment from "moment";
import { ICalEvent } from "ical-generator";

module.exports = (app: Application, connection: Connection) => {};
