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

@Entity('measures')
class Measures {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    userId: String;

    @ManyToOne(() => User, user => user.measures)
    @JoinColumn()
    user: User;

    @Column()
    date: Date;

    @Column({ nullable: true , type: 'float'})
    waist: number;

    @Column({ nullable: true , type: 'float'})
    belly: number;

    @Column({ nullable: true , type: 'float'})
    hip: number;

    @Column({ nullable: true , type: 'float'})
    breastplate: number;

    @Column({ nullable: true , type: 'float'})
    shoulder: number;

    @Column({ nullable: true , type: 'float'})
    rightArm: number;

    @Column({ nullable: true , type: 'float'})
    leftArm: number;

    @Column({ nullable: true , type: 'float'})
    rightForearm: number;

    @Column({ nullable: true , type: 'float'})
    leftForearm: number;

    @Column({ nullable: true , type: 'float'})
    rightLeg: number;

    @Column({ nullable: true , type: 'float'})
    leftLeg: number;

    @Column({ nullable: true , type: 'float'})
    rightCalf: number;

    @Column({ nullable: true , type: 'float'})
    leftCalf: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Measures;