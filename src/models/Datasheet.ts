import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne,
    JoinColumn,
    CreateDateColumn, 
    UpdateDateColumn, 
} from 'typeorm';
import User from './User';
@Entity('datasheets')
class Datasheet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => User, user => user.datasheet)
    @JoinColumn()
    user: User;

    @Column()
    sex: number;

    @Column({default: 1})
    goal: number;

    @Column()
    birthDate: Date;

    @Column({type: 'float', default: 0})
    height: number;

    @Column({type: 'float', default: 0})
    weight: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Datasheet;