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
    var Calorias = {
        title: "Calorias",
        body: "As calorias é quantidade de energia necessária para elevar a temperatura de 1 grama de água de 14,5 oC para 15,5 oC.",
        value: macronutrient.calories,
        un: 'kcal'
    }
    array.push(Calorias);
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
    var Gorduras = {
        title: "Gorduras",
        body: "As gorduras protegem os órgãos contra lesões, ajuda a manter a temperatura do corpo, a absorver algumas vitaminas e a dar sensação de saciedade.",
        value: macronutrient.fats,
        un: 'g'
    }
    array.push(Gorduras);

    return response.json(array);
    
})

export default macronutrientsRoutes;

