import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EventAttendee } from "./EventAttendee";
import { EventOrganizer } from "./EventOrganizer";

@Entity()
export class EventTemplate {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subject: string;
  @Column()
  start: string;
  @Column()
  end: string;
  @OneToMany(() => EventAttendee, (attendee) => attendee.eventTemplate, {
    cascade: true,
  })
  attendees: EventAttendee[];
  @OneToOne(() => EventOrganizer, { cascade: true })
  @JoinColumn()
  organizer: EventOrganizer;
}
