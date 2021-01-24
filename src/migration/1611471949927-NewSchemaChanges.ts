import {MigrationInterface, QueryRunner} from "typeorm";

export class NewSchemaChanges1611471949927 implements MigrationInterface {
    name = 'NewSchemaChanges1611471949927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "visitor-services"."admin" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "phonenumber" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_ac882d79b2ec55c14d76929c151" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor-services"."event_organizer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT 'NO NAME', "email" character varying NOT NULL, CONSTRAINT "PK_5c75aace203b30d87866fa23e0e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor-services"."event_template" ("id" SERIAL NOT NULL, "subject" character varying NOT NULL, "start" character varying NOT NULL, "end" character varying NOT NULL, "organizerId" integer, CONSTRAINT "REL_15d9daa61cf9058a999d94b797" UNIQUE ("organizerId"), CONSTRAINT "PK_d41757a5271da7bf73b08475db0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor-services"."event_attendee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT 'NO NAME', "email" character varying NOT NULL, "eventTemplateId" integer, CONSTRAINT "PK_5bb13929d4995e2089e22900b65" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor-services"."guest" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "organizername" character varying, "organizermail" character varying NOT NULL, "organizerphone" character varying, "starttime" character varying NOT NULL, "endtime" character varying NOT NULL, "checkin" character varying, "checkout" character varying, "status" character varying, "organization" character varying, "blocked" boolean, "blocker" character varying, "covid" character varying NOT NULL, "eventid" character varying, CONSTRAINT "PK_8c21ba502b6416bfff485c427c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor-services"."muser" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "phonenumber" character varying NOT NULL, "password" character varying NOT NULL, "approve" boolean, CONSTRAINT "PK_a1cd887d6be75b1f4b7099476e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitor-services"."user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "phonenumber" character varying NOT NULL, "password" character varying NOT NULL, "approve" boolean, CONSTRAINT "PK_368c9f122ebd74fa675a44617fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "visitor-services"."event_template" ADD CONSTRAINT "FK_15d9daa61cf9058a999d94b797c" FOREIGN KEY ("organizerId") REFERENCES "visitor-services"."event_organizer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitor-services"."event_attendee" ADD CONSTRAINT "FK_b7fca6a5958491683db2b7e20ee" FOREIGN KEY ("eventTemplateId") REFERENCES "visitor-services"."event_template"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor-services"."event_attendee" DROP CONSTRAINT "FK_b7fca6a5958491683db2b7e20ee"`);
        await queryRunner.query(`ALTER TABLE "visitor-services"."event_template" DROP CONSTRAINT "FK_15d9daa61cf9058a999d94b797c"`);
        await queryRunner.query(`DROP TABLE "visitor-services"."user"`);
        await queryRunner.query(`DROP TABLE "visitor-services"."muser"`);
        await queryRunner.query(`DROP TABLE "visitor-services"."guest"`);
        await queryRunner.query(`DROP TABLE "visitor-services"."event_attendee"`);
        await queryRunner.query(`DROP TABLE "visitor-services"."event_template"`);
        await queryRunner.query(`DROP TABLE "visitor-services"."event_organizer"`);
        await queryRunner.query(`DROP TABLE "visitor-services"."admin"`);
    }

}
