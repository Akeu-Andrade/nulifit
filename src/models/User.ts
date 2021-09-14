import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    OneToMany,
    CreateDateColumn, 
    UpdateDateColumn, 
} from 'typeorm';
import Datasheet from './Datasheet';
import Measures from './Measures';
import Macronutrient from './Macronutrient';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Datasheet, datasheet => datasheet.user)
    datasheet: Datasheet[]

    @OneToMany(() => Measures, measures => measures.user)
    measures: Measures[]

    @OneToMany(() => Macronutrient, macronutrient => macronutrient.user)
    macronutrient: Macronutrient[]

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default User;