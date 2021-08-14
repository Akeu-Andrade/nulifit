import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne,
    OneToMany,
    RelationId,
    JoinColumn,
    CreateDateColumn, 
    UpdateDateColumn, 
} from 'typeorm';
import User from './User';

export const SEXO_BIOLOGICO = {
    FEMININO: 'FEMININO',
    MASCULINO: 'MASCULINO',
}

export const SEXO_BIOLOGICO_VALUES: TBiologicalSex[] = [
    'FEMININO', 
    'MASCULINO',
];

export type TBiologicalSex = 'FEMININO' | 'MASCULINO';

@Entity('datasheets')
class Datasheet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    userId: String;

    @ManyToOne(() => User, user => user.datasheet)
    @JoinColumn()
    user: User;

    @Column()
    date: Date;

    @Column()
    sex: TBiologicalSex;

    @Column()
    birthDate: Date;

    @Column()
    height: number;

    @Column()
    weight: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Datasheet;