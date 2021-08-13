import User, { TBiologicalSex } from '../models/User';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';

interface Request{ 
    name: string; 
    email: string; 
    password: string;
    birthDate: Date;
    sex: TBiologicalSex;
}

class CreateUserService{
    public async execute({name, email, password, birthDate, sex}: Request): Promise<User>{
        const usersRepository = getCustomRepository(UsersRepository);
        
        const findUserInSameEmail = await usersRepository.findByEmail(email);

        if(findUserInSameEmail){
            throw new AppError('Este email já foi cadastrado!');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name, 
            email,
            password: hashedPassword,
            birthDate,
            sex
        });

        await usersRepository.save(user);

        return user; 
    }
}

export default CreateUserService;