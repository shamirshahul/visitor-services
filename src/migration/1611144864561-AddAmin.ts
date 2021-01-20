import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAmin1611144864561 implements MigrationInterface {
  name = "AddAmin1611144864561";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public."admin" ("firstName", "lastName", username, phonenumber, "password") VALUES('admin', 'admin', 'admin', '1234567890', 'admin@123');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM public."admin" WHERE username="admin"`
    );
  }
}
