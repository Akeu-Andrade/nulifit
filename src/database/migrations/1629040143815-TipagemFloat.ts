import {MigrationInterface, QueryRunner} from "typeorm";

export class TipagemFloat1629040143815 implements MigrationInterface {
    name = 'TipagemFloat1629040143815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "waist"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "waist" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "belly"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "belly" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "hip"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "hip" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "breastplate"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "breastplate" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "shoulder"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "shoulder" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightArm" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftArm" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightForearm" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftForearm" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightLeg" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftLeg" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightCalf" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftCalf" double precision DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "sex"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "sex" integer NOT NULL`);
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
        await queryRunner.query(`ALTER TABLE "datasheets" DROP COLUMN "sex"`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD "sex" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftCalf" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightCalf"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightCalf" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftLeg" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightLeg"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightLeg" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftForearm" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightForearm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightForearm" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "leftArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "leftArm" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "rightArm"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "rightArm" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "shoulder"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "shoulder" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "breastplate"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "breastplate" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "hip"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "hip" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "belly"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "belly" integer`);
        await queryRunner.query(`ALTER TABLE "measures" DROP COLUMN "waist"`);
        await queryRunner.query(`ALTER TABLE "measures" ADD "waist" integer`);
    }

}
