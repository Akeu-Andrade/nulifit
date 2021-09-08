import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateDatasheetsService from '../services/datasheet/CreateDatasheetService';
import UpdateDatasheetsService from '../services/datasheet/UpdateDatasheetService';

const datasheetsRoutes = Router();

datasheetsRoutes.post('/', async (request, response)=> {

    const {userId, sex, birthDate, height, weight, goal} = request.body;

    const createDatasheets = new CreateDatasheetsService();

    const datasheet = await createDatasheets.execute({
        userId, sex, birthDate, height, weight, goal
    });

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

