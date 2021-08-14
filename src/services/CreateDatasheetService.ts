import Datasheet, { TBiologicalSex }  from '../models/Datasheet';
import { getCustomRepository } from 'typeorm';
import DatasheetsRepository from '../repositories/DatasheetsRepository';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request{ 
    userId: String,
    date: Date,
    sex: TBiologicalSex,
    birthDate: Date,
    height: number,
    weight: number,
}

class CreateDatasheetService{
    public async execute({userId, date, sex, birthDate, height, weight}: Request): Promise<Datasheet>{
        const datasheetsRepository = getCustomRepository(DatasheetsRepository);
        
        const datasheet = datasheetsRepository.create({
            userId, date, sex, birthDate, height, weight
        });

        await datasheetsRepository.save(datasheet);

        return datasheet; 
    }
}

export default CreateDatasheetService;