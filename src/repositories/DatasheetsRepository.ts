import Datasheet from '../models/Datasheet';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Datasheet)
class DatasheetsRepository extends Repository<Datasheet>{
    public async findByUserId(userId: string): Promise<Datasheet | null> {
        const findDatasheet = await this.findOne({
            where: { userId },
        });

        return findDatasheet || null;
    }
}

export default DatasheetsRepository;


