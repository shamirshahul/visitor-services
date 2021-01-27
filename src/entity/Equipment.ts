import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EquipmentType } from "./EquipmnetType";
import { EventTemplate } from "./EventTemplate";
import { Room } from "./Room";

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  equipmentName: string;
  @ManyToOne(() => Room, (rooms) => rooms.equipments)
  room: Room;
  @ManyToOne(() => EquipmentType, (equipmentType) => equipmentType.equipments)
  equipmentType: EquipmentType;
}
