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

@Entity('macronutrient')
class Macronutrient{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => User, user => user.macronutrient)
    @JoinColumn()
    user: User;

    @Column({type: 'float', default: 0})
    calories: number;

    @Column({type: 'float', default: 0})
    protein: number;

    @Column({type: 'float', default: 0})
    carbohydrates: number;

    @Column({type: 'float', default: 0})
    fats: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Macronutrient;