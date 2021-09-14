import Macronutrient from '../models/Macronutrient';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Macronutrient)
class MacronutrientsRepository extends Repository<Macronutrient>{
    public async findByUserId(userId: string): Promise<Macronutrient | null> {
        const findMacronutrient = await this.findOne({
            where: { userId },
        });

        return findMacronutrient || null;
    }
}

export default MacronutrientsRepository;
