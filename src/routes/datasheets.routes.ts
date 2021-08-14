import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateDatasheetsService from '../services/CreateDatasheetService';

const datasheetsRoutes = Router();

datasheetsRoutes.post('/', async (request, response)=> {

    const {userId, date, sex, birthDate, height, weight} = request.body;

    const createDatasheets = new CreateDatasheetsService();

    const datasheet = await createDatasheets.execute({
        userId, date, sex, birthDate, height, weight
    });

    return response.json(datasheet);
    
})

export default datasheetsRoutes;

