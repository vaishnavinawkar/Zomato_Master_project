//Libraries
import express from 'express';

//DAtabase modal
import {MenuModel, ImageModel} from '../../database/allModels';


const Router = express.Router();

/* 
* Router               /list
* Description          GEt all list of menu basedon resturant id
* Parameters           _id
* Access               Public
* Method               GET
*/

Router.get('/list/:_id', async (req,res)=> {
    try{

        const {_id} = req.params;
        const menus = await MenuModel.findById(_id);

        if (!menus) {
            res.status(404).json({error: "No menu present for this restuarant"});
        }

        return res.json({menus});
    } catch(error){
        return res.status(500).json({error: error.message});
        
    }
});

/* 
* Router               /image
* Description          GEt all list of menu images with resturant id
* Parameters           _id
* Access               Public
* Method               GET
*/

Router.get('/image/:_id', async (res, req)=>{
    try{

        const {_id}= req.params;
        const menuImages = await ImageModel.findOne(_id);

        //TODO: validate if the images are presne tor not throw error

    } catch (error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;
