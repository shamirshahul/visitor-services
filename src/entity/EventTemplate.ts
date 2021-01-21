import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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
  @OneToMany(() => EventPeople, (attendee) => attendee.id)
  attendees: EventPeople[];
  @OneToOne(() => EventPeople)
  @JoinColumn()
  organizer: EventPeople;
}

@Entity()
export class EventPeople {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: "NO NAME" })
  name: string;
  @Column()
  email: string;
}
