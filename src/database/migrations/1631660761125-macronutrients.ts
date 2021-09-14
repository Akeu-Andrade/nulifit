import {MigrationInterface, QueryRunner} from "typeorm";

export class macronutrients1631660761125 implements MigrationInterface {
    name = 'macronutrients1631660761125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "macronutrient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "calories" double precision NOT NULL DEFAULT '0', "protein" double precision NOT NULL DEFAULT '0', "carbohydrates" double precision NOT NULL DEFAULT '0', "fats" double precision NOT NULL DEFAULT '0', "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1396036a228d042044ac395ef17" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "macronutrient" ADD CONSTRAINT "FK_fc0ef219bcf8b72a5814f995262" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "macronutrient" DROP CONSTRAINT "FK_fc0ef219bcf8b72a5814f995262"`);
        await queryRunner.query(`DROP TABLE "macronutrient"`);
    }

}
