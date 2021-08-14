import {MigrationInterface, QueryRunner} from "typeorm";

export class RetirandoObrigatorios1628822193581 implements MigrationInterface {
    name = 'RetirandoObrigatorios1628822193581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "waist" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "belly" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "hip" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "breastplate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "shoulder" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightArm" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftArm" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightForearm" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftForearm" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightLeg" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftLeg" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightCalf" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftCalf" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftCalf" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightCalf" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftLeg" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightLeg" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftForearm" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightForearm" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "leftArm" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "rightArm" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "shoulder" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "breastplate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "hip" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "belly" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measures" ALTER COLUMN "waist" SET NOT NULL`);
    }

}
