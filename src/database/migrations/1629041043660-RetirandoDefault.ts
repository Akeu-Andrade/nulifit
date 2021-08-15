import {MigrationInterface, QueryRunner} from "typeorm";

export class RetirandoDefault1629041043660 implements MigrationInterface {
    name = 'RetirandoDefault1629041043660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "waist"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "waist" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "belly"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "belly" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "hip"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "hip" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "breastplate"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "breastplate" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "shoulder"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "shoulder" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightArm" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftArm" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightForearm" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftForearm" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightLeg" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftLeg" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightCalf" double precision`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftCalf" double precision`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "height" double precision NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "weight" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "weight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "height" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftCalf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightCalf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftLeg" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightLeg" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftForearm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightForearm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftArm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightArm" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "shoulder"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "shoulder" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "breastplate"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "breastplate" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "hip"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "hip" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "belly"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "belly" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "waist"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "waist" integer NOT NULL`);
    }

}
