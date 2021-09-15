import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateDatasheetsService from '../services/datasheet/CreateDatasheetService';
import CreateMacronutrientsService from '../services/macronutrient/CreateMacronutrientService';
import UpdateDatasheetsService from '../services/datasheet/UpdateDatasheetService';

const datasheetsRoutes = Router();

datasheetsRoutes.post('/', async (request, response)=> {

    const {userId, sex, birthDate, height, weight, goal} = request.body;

    const createDatasheets = new CreateDatasheetsService();
    const createMacronutrients = new CreateMacronutrientsService();

    const datasheet = await createDatasheets.execute({
        userId, sex, birthDate, height, weight, goal
    });

    if (datasheet){
        var today = new Date();
        var birthD = new Date(birthDate);
        var age = today.getFullYear() - birthD.getFullYear();
        var m = today.getMonth() - birthD.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthD.getDate())) 
        {
            age--;
        }
        var calories = 1.3 * (66.47 + (13.75 * weight) + (5 * height * 100) - (6.8 * age));
        calories = Math.floor( calories );
        if(goal == 2){
            calories = calories + 200;
        } else if(goal == 3){
            calories = calories - 200;
        }
        var protein = 2 * weight;
        protein = Math.floor( protein );
        var fats = 0;
        if(sex == 1){
            fats = 1 * weight;
        } else {
            fats = 0.8 * weight;
        }
        fats = Math.floor( fats );
        var carbohydrates = calories - protein;
        carbohydrates = carbohydrates - fats;

        const macronutrient = await createMacronutrients.execute({
            userId, calories, protein, carbohydrates, fats
        });
    }

    return response.json(datasheet);
    
})

datasheetsRoutes.put('/', async (request, response)=> {

    const {userId, goal} = request.body;

    const updateDatasheets = new UpdateDatasheetsService();

    const datasheet = await updateDatasheets.execute({
        userId, goal
    });

    return response.json(datasheet);
    
})

export default datasheetsRoutes;

