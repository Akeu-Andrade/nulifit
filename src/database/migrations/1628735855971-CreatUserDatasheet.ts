import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatUserDatasheet1628735855971 implements MigrationInterface {
    name = 'CreatUserDatasheet1628735855971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "sex" character varying NOT NULL, "password" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "datasheets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "height" integer NOT NULL, "weight" integer NOT NULL, "date" TIMESTAMP NOT NULL, "waist" integer NOT NULL, "belly" integer NOT NULL, "hip" integer NOT NULL, "breastplate" integer NOT NULL, "shoulder" integer NOT NULL, "rightArm" integer NOT NULL, "leftArm" integer NOT NULL, "rightForearm" integer NOT NULL, "leftForearm" integer NOT NULL, "rightLeg" integer NOT NULL, "leftLeg" integer NOT NULL, "rightCalf" integer NOT NULL, "leftCalf" integer NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3a1962000207307297faabd4e58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "datasheets" ADD CONSTRAINT "FK_5d79bef30f13db307a6d6cce458" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "datasheets" DROP CONSTRAINT "FK_5d79bef30f13db307a6d6cce458"`);
        await queryRunner.query(`DROP TABLE "datasheets"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
