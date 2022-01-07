//libraries
import express from 'express';

//database modal 
import {RestaurantModel} from '../../database/allModels';

const Router = express.Router();

/* 
* Router               /
* Description          GET all resturant details based on thr city
* Parameters           none
* Access               Public
* Method               GET 
*/


Router.get('/',async (res,req)=> {
    try{
        //http://loaclhost:4000/restaurant/?city=ncr
        const {city}= req.query;
        const restaurants = await RestaurantModel.find({city});
        if(restaurants.length== 0){
            return res.json({error: "No restaurants found in the city"});
        }
        return res.json({restaurants});
        

    }  catch(error){
        return res.status(500).json({error: error.message});
    }
});


//parameters and query are different while parameters are describe by : 
//query are describe by ?

/* 
* Router               /
* Description          get indiviaul resturant details based on id
* Parameters           none
* Access               Public
* Method               GET 
*/

 //http://loaclhost:4000/restaurant/213455gfjdnfkjdh35
Router.get('/:_id',async (res, req)=>{
    try{
        const {_id}= req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if(!restaurant) return res.status(400).json({error: "Restaurant NOt FOund"});

        return res.json({restaurant});

    }catch(error){
        return res.status(500).json({error: error.message});
    }

});

/* 
* Router               /search
* Description          Get resturant details based on search string
* Parameters           none
* Access               Public
* Method               GET 
*/


Router.get('/search/:searchString', async( res, req)=>{
    try{
        const {searchString} = req.params;
        const restaurants= await RestaurantModel.find({
            name: { $regex: searchString, $options: "i"},
        });

        if(!restaurants) return res.status(404).json({error:`No restaurants match with ${searchString}`});

        return res.json({restaurants});
          

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});



export default Router;