import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventOrganizer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: "NO NAME" })
  name: string;
  @Column()
  email: string;
}
