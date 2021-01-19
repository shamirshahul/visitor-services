import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1610954613660 implements MigrationInterface {
    name = 'CreateDatabase1610954613660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "guest" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "organizername" character varying, "organizermail" character varying NOT NULL, "organizerphone" character varying, "starttime" character varying NOT NULL, "endtime" character varying NOT NULL, "checkin" character varying, "checkout" character varying, "status" character varying, "organization" character varying, "blocked" boolean, "blocker" character varying, "covid" character varying NOT NULL, "eventid" character varying, CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "muser" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "phonenumber" character varying NOT NULL, "password" character varying NOT NULL, "approve" boolean, CONSTRAINT "PK_da5f40d984a09987df2df3d4bfe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "phonenumber" character varying NOT NULL, "password" character varying NOT NULL, "approve" boolean, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "muser"`);
        await queryRunner.query(`DROP TABLE "guest"`);
    }

}
