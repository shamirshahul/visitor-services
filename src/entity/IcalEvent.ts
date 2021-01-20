import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IcalEvent {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subject: string;
  @Column()
  start: string;
  @Column()
  end: string;
  @Column()
  attendee: string;
}
