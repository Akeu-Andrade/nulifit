import Datasheet from '../../models/Datasheet';
import { getCustomRepository } from 'typeorm';
import DatasheetsRepository from '../../repositories/DatasheetsRepository';

interface Request{ 
    userId: string,
    sex: number,
    birthDate: Date,
    height: number,
    weight: number,
}

class CreateDatasheetService{
    public async execute({userId, sex, birthDate, height, weight}: Request): Promise<Datasheet>{
        const datasheetsRepository = getCustomRepository(DatasheetsRepository);
        
        const datasheet = datasheetsRepository.create({
            userId, sex, birthDate, height, weight
        });

        await datasheetsRepository.save(datasheet);

        return datasheet; 
    }
}

export default CreateDatasheetService;