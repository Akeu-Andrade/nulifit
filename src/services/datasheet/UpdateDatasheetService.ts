import Datasheet from '../../models/Datasheet';
import { getCustomRepository, getRepository } from 'typeorm';
import DatasheetsRepository from '../../repositories/DatasheetsRepository';
import User from '../../models/User';
import AppError from '../../errors/AppError';
import { GoalEnum } from '../../Enum/GoalEnum';

interface Request{ 
    userId: string,
    goal: number,
}

class UpdateDatasheetService{
    public async execute({
        userId, 
        goal
    }: Request): Promise<Datasheet>{

        /* Verifica se esse usuario está logado */
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(userId);

        if (!user) {
            throw new AppError('Erro na autenticação, você não está logado!.', 401);
        }

        const datasheetsRepository = getCustomRepository(DatasheetsRepository);

        const datasheets = await datasheetsRepository.findByUserId(userId);
        
        datasheets.goal = goal;

        await datasheetsRepository.save(datasheets);

        return datasheets; 
    }
}

export default UpdateDatasheetService;