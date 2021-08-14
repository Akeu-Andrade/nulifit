import Measures from '../models/Measures';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Measures)
class MeasuressRepository extends Repository<Measures>{
    public async findByUserId(userId: string): Promise<Measures | null> {
        const findMeasures = await this.findOne({
            where: { userId },
        });

        return findMeasures || null;
    }
}

export default MeasuressRepository;


