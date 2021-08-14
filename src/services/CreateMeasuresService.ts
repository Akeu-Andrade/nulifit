import Measures from '../models/Measures';
import { getCustomRepository } from 'typeorm';
import MeasuressRepository from '../repositories/MeasuressRepository';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request{ 
    userId: String,
    date: Date,
    waist: number,
    belly: number,
    hip: number,
    breastplate: number,
    shoulder: number,
    rightArm: number,
    leftArm: number,
    rightForearm: number,
    leftForearm: number,
    rightLeg: number,
    leftLeg: number,
    rightCalf: number,
    leftCalf: number
}

class CreateMeasuresService{
    public async execute({userId, date, waist, belly, hip, breastplate, shoulder, rightArm, leftArm, rightForearm, leftForearm, rightLeg, leftLeg, rightCalf, leftCalf
    }: Request): Promise<Measures>{
        const measuressRepository = getCustomRepository(MeasuressRepository);
        
        const measures = measuressRepository.create({
            userId, date, waist, belly, hip, breastplate, shoulder, rightArm, leftArm, rightForearm, leftForearm, rightLeg, leftLeg, rightCalf, leftCalf
        });

        await measuressRepository.save(measures);

        return measures; 
    }
}

export default CreateMeasuresService;