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

    @Column({ nullable: true })
    waist: number;

    @Column({ nullable: true })
    belly: number;

    @Column({ nullable: true })
    hip: number;

    @Column({ nullable: true })
    breastplate: number;

    @Column({ nullable: true })
    shoulder: number;

    @Column({ nullable: true })
    rightArm: number;

    @Column({ nullable: true })
    leftArm: number;

    @Column({ nullable: true })
    rightForearm: number;

    @Column({ nullable: true })
    leftForearm: number;

    @Column({ nullable: true })
    rightLeg: number;

    @Column({ nullable: true })
    leftLeg: number;

    @Column({ nullable: true })
    rightCalf: number;

    @Column({ nullable: true })
    leftCalf: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Measures;