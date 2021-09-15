import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateMacronutrientsService from '../services/macronutrient/CreateMacronutrientService';

const macronutrientsRoutes = Router();

macronutrientsRoutes.post('/', async (request, response)=> {

    const {userId, calories, protein, carbohydrates, fats} = request.body;

    const createMacronutrients = new CreateMacronutrientsService();

    const macronutrient = await createMacronutrients.execute({
        userId, calories, protein, carbohydrates, fats
    });

    return response.json(macronutrient);
    
})

macronutrientsRoutes.get('/', async (request, response)=> {

    const {userId} = request.body;

    const createMacronutrients = new CreateMacronutrientsService();

    const macronutrient = await createMacronutrients.execute(userId);

    return response.json(macronutrient);
    
})


export default macronutrientsRoutes;

