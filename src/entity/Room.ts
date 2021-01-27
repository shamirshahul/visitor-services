import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Equipment } from "./Equipment";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  room: string;
  @Column()
  email: string;
  @OneToMany(() => Equipment, (equipment) => equipment.room, {
    cascade: true,
  })
  equipments: Equipment[];
}
