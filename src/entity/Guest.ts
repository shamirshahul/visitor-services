import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column({ nullable: true })
  organizername: string;
  @Column()
  organizermail: string;
  @Column({ nullable: true })
  organizerphone: string;
  @Column()
  starttime: string;
  @Column()
  endtime: string;
  @Column({ nullable: true })
  checkin: string;
  @Column({ nullable: true })
  checkout: string;
  @Column({ nullable: true })
  status: string;
  @Column({ nullable: true })
  organization: string;
  @Column({ nullable: true })
  blocked: boolean;
  @Column({ nullable: true })
  blocker: string;
  @Column()
  covid: string;
  @Column({ nullable: true })
  eventid: string;
}
