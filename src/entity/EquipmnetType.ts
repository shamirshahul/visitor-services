import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Equipment } from "./Equipment";

@Entity()
export class EquipmentType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  typeName: string;
  @OneToMany(() => Equipment, (equipment) => equipment.equipmentType, {
    cascade: true,
  })
  equipments: Equipment[];
}
