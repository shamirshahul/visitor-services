import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EventTemplate } from "./EventTemplate";

@Entity()
export class EventAttendee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: "NO NAME" })
  name: string;
  @Column()
  email: string;
  @ManyToOne(() => EventTemplate, (eventTemplate) => eventTemplate.attendees)
  eventTemplate: EventTemplate;
}
