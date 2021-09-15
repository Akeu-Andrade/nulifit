import Macronutrient from '../../models/Macronutrient';
import { getCustomRepository } from 'typeorm';
import MacronutrientsRepository from '../../repositories/MacronutrientsRepository';

interface Request{ 
    userId: string
}

class GetMacronutrientService{
    public async execute({userId}: Request): Promise<Macronutrient>{
        const macronutrientsRepository = getCustomRepository(MacronutrientsRepository);
        
        const macronutrient = macronutrientsRepository.findOne({
            userId
        });

        return macronutrient; 
    }
}

export default GetMacronutrientService;