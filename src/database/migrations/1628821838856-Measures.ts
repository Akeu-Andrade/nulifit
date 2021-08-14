import {MigrationInterface, QueryRunner} from "typeorm";

export class Measures1628821838856 implements MigrationInterface {
    name = 'Measures1628821838856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "measures" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "date" TIMESTAMP NOT NULL, "waist" integer NOT NULL, "belly" integer NOT NULL, "hip" integer NOT NULL, "breastplate" integer NOT NULL, "shoulder" integer NOT NULL, "rightArm" integer NOT NULL, "leftArm" integer NOT NULL, "rightForearm" integer NOT NULL, "leftForearm" integer NOT NULL, "rightLeg" integer NOT NULL, "leftLeg" integer NOT NULL, "rightCalf" integer NOT NULL, "leftCalf" integer NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ec34a47385441849095def20546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "sex"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "waist"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "belly"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "hip"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "breastplate"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "shoulder"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "rightArm"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "leftArm"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "rightForearm"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "leftForearm"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "rightLeg"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "leftLeg"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "rightCalf"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "leftCalf"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "sex" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "birthDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ADD CONSTRAINT "FK_6f98ea90ad81c11b10edeeeea98" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measures" DROP CONSTRAINT "FK_6f98ea90ad81c11b10edeeeea98"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "sex"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "leftCalf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "rightCalf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "leftLeg" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "rightLeg" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "leftForearm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "rightForearm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "leftArm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "rightArm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "shoulder" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "breastplate" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "hip" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "belly" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "waist" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "sex" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "measures"`);
    }

}
