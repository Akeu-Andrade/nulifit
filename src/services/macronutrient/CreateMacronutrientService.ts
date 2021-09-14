import Macronutrient from '../../models/Macronutrient';
import { getCustomRepository } from 'typeorm';
import MacronutrientsRepository from '../../repositories/MacronutrientsRepository';

interface Request{ 
    userId: string,
    calories: number,
    protein: number,
    carbohydrates: number,
    fats: number
}

class CreateMacronutrientService{
    public async execute({userId, calories, protein, carbohydrates, fats}: Request): Promise<Macronutrient>{
        const macronutrientsRepository = getCustomRepository(MacronutrientsRepository);
        
        const macronutrient = macronutrientsRepository.create({
            userId, calories, protein, carbohydrates, fats
        });

        await macronutrientsRepository.save(macronutrient);

        return macronutrient; 
    }
}

export default CreateMacronutrientService;