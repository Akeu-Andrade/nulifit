import {MigrationInterface, QueryRunner} from "typeorm";

export class createMigrationUser1630455825565 implements MigrationInterface {
    name = 'createMigrationUser1630455825565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "measures" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "date" TIMESTAMP NOT NULL, "waist" double precision, "belly" double precision, "hip" double precision, "breastplate" double precision, "shoulder" double precision, "rightArm" double precision, "leftArm" double precision, "rightForearm" double precision, "leftForearm" double precision, "rightLeg" double precision, "leftLeg" double precision, "rightCalf" double precision, "leftCalf" double precision, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ec34a47385441849095def20546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "datasheets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "sex" integer NOT NULL, "goal" integer NOT NULL DEFAULT '1', "birthDate" TIMESTAMP NOT NULL, "height" double precision NOT NULL DEFAULT '0', "weight" double precision NOT NULL DEFAULT '0', "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3a1962000207307297faabd4e58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "measures" ADD CONSTRAINT "FK_6f98ea90ad81c11b10edeeeea98" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD CONSTRAINT "FK_5d79bef30f13db307a6d6cce458" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "datasheets" DROP CONSTRAINT "FK_5d79bef30f13db307a6d6cce458"`);
        await queryRunner.query(`ALTER TABLE "measures" DROP CONSTRAINT "FK_6f98ea90ad81c11b10edeeeea98"`);
        await queryRunner.query(`DROP TABLE "datasheets"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "measures"`);
    }

}
