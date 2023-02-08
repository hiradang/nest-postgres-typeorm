import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserRoleColumn1675858329560 implements MigrationInterface {
  name = 'addUserRoleColumn1675858329560';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'member')`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'member'`,
    );
    await queryRunner.query(
      `ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
  }
}
