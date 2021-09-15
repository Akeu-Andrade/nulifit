import Macronutrient from '../../models/Macronutrient';
import { getCustomRepository , getRepository} from 'typeorm';
import MacronutrientsRepository from '../../repositories/MacronutrientsRepository';

interface Request{ 
    userId: string,
}

class GetMacronutrientsService{
    public async execute({userId}: Request): Promise<Macronutrient>{
        const MacronutrientsRepository = getRepository(Macronutrient);

        const macronutrient = await MacronutrientsRepository.findOne({ where: {userId}});

        return macronutrient; 
    }
}

export default GetMacronutrientsService;