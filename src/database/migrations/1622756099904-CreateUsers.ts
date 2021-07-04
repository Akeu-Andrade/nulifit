import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1622756099904 implements MigrationInterface {
        public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name: 'users',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default: 'uuid_generate_v4()'
                        },
                        {
                            name: 'name',
                            type: 'varchar',
                        },
                        
                        {
                            name: 'email',
                            type: 'varchar',
                        },
                        {
                            name: 'password',
                            type: 'varchar',
                        },
                        {
                            name: 'surname',
                            type: 'varchar',
                            isNullable: true,
                        },{
                            name: 'profession',
                            type: 'varchar',
                            isNullable: true,
                        },
                        {
                            name: 'createDate',
                            type: 'timestamp',
                            default: 'now()',
                        },
                        {
                            name: 'updateDate',
                            type: 'timestamp',
                            default: 'now()',
                        }
                    ]
                })
            );
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('users')
        }
    
    }
    
