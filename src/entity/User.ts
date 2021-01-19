import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    firstName:string;
    @Column()
    lastName: string;
    @Column()
    username: string;
    @Column()
    phonenumber: string;
    @Column()
    password: string;
    @Column({nullable:true})
    approve: boolean;
}
