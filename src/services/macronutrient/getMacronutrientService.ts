import Macronutrient from '../../models/Macronutrient';
import User from '../../models/User';
import { getCustomRepository } from 'typeorm';
import MacronutrientsRepository from '../../repositories/MacronutrientsRepository';
import AppError from '../../errors/AppError';

interface Request{ 
    userId: string
}

// class GetMacronutrientService{
//     public async execute({userId}: Request): Promise<Macronutrient>{

//         const macronutrientsRepository = getCustomRepository(MacronutrientsRepository);
        
//         const macronutrient = await macronutrientsRepository.findByUserId(userId);

//         if (!macronutrient) {
//             throw new AppError('Usuário sem informações!.', 401);
//         }

//         return macronutrient; 
//     }
// }

export default GetMacronutrientService;