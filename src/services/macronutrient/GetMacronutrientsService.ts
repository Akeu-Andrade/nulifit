import Macronutrient from '../../models/Macronutrient';
import { getCustomRepository , getRepository} from 'typeorm';
import MacronutrientsRepository from '../../repositories/MacronutrientsRepository';
import AppError from '../../errors/AppError';
interface Request{ 
    userId: string,
}

class GetMacronutrientsService{
    public async execute({userId}: Request): Promise<Macronutrient>{
        const MacronutrientsRepository = getRepository(Macronutrient);

        const macronutrient = await MacronutrientsRepository.findOne({ where: {userId}});

        if(!macronutrient){
            throw new AppError('Usuário sem macros cadastrados! ', 401)
        }

        return macronutrient; 
    }
}

export default GetMacronutrientsService;