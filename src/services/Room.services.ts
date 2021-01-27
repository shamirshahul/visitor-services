import { Application } from "express";
import { Room } from "../entity/Room";
import { Connection } from "typeorm";
import * as _ from "lodash";
import { Equipment } from "../entity/Equipment";
import { EquipmentType } from "../entity/EquipmnetType";

module.exports = (app: Application, connection: Connection) => {
  app.post("/room/create", (req, res) => {
    req.body.equipments = req.body.equipments.map((equipment: Equipment) => {
      equipment.equipmentType = <EquipmentType>equipment.equipmentType;
      console.log(typeof equipment.equipmentType);
      return equipment;
    });
    const rooms: Room = <Room>_.cloneDeep(req.body);
    console.log(rooms);
    connection.manager.save(rooms);
    res.type("json").status(201).send(rooms);
  });
};
