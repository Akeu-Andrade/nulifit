import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateMacronutrientsService from '../services/macronutrient/CreateMacronutrientService';
import GetMacronutrientsService from '../services/macronutrient/GetMacronutrientsService';

const macronutrientsRoutes = Router();

macronutrientsRoutes.post('/', async (request, response)=> {

    const {userId, calories, protein, carbohydrates, fats} = request.body;

    const createMacronutrients = new CreateMacronutrientsService();

    const macronutrient = await createMacronutrients.execute({
        userId, calories, protein, carbohydrates, fats
    });

    return response.json(macronutrient);
    
})

macronutrientsRoutes.post('/user/', async (request, response)=> {

    const {userId} = request.body;

    const getMacronutrients = new GetMacronutrientsService();

    const macronutrient = await getMacronutrients.execute({
        userId
    });

    var array = new Array();
    var Carboidratos = {
        title: "Carboidratos",
        body: "Os carboidratos evitam que as proteínas dos tecidos sejam utilizadas para o fornecimento de energia.",
        value: macronutrient.carbohydrates,
        un: 'g'
    }
    array.push(Carboidratos);
    var Proteinas = {
        title: "Proteínas",
        body: "As proteínas são necessárias para o crescimento, construção e reparação dos tecidos e estão presentes também na constituição das células.",
        value: macronutrient.protein,
        un: 'g'
    }
    array.push(Proteinas);

    return response.json(array);
    
})

export default macronutrientsRoutes;

