//libraries
import express from 'express';

//database modal 
import {FoodModel} from '../../database/allModels';

//Validation
import { validateCategory, validateID } from '../../validation/common';

const Router = express.Router();

/* 
* Router               /r/:_id
* Description          GET all Food  based on particular restaurant
* Parameters           none
* Access               Public
* Method               GET 
*/

Router.get("/r/:_id", async(req, res)=>{
    try{
        await validateID(req.params);
        const {_id} = req.params;

        const foods = await FoodModel.find({restaurant: _id });

        
        return res.json({foods});

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
* Router               /c/:category
* Description          GET all Food  based on particular category
* Parameters           none
* Access               Public
* Method               GET 
*/

Router.get('/c/:category', async(req,res)=> {
    try{
        validateCategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({
                category: { $regex: category, $options:"i"},
            });

            if(!foods) return res.status(404).json({error:`No food match with ${category}`});

            return res.json({foods});

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});


export default Router;