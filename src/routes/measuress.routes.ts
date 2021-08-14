import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateMeasuresService from '../services/CreateMeasuresService';

const measuressRoutes = Router();

measuressRoutes.post('/', async (request, response)=> {

    const {userId, date, waist, belly, hip, breastplate, shoulder, rightArm, leftArm, rightForearm, leftForearm, rightLeg, leftLeg, rightCalf, leftCalf} = request.body;

    const createMeasures = new CreateMeasuresService();

    const measures = await createMeasures.execute({
        userId, date, waist, belly, hip, breastplate, shoulder, rightArm, leftArm, rightForearm, leftForearm, rightLeg, leftLeg, rightCalf, leftCalf
    });

    return response.json(measures);
    
})

export default measuressRoutes;

