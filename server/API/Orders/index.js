//LIbraries
import express from "express";
import passport from "passport";


//database modal
import { OrderModel } from "../../database/allModels";

//validateuser
import validateUser from "../../config/validateUser";

const Router = express.Router();

/* 
* Router               /
* Description          GET all orders  based on id
* Parameters           _id
* Access               Private
* Method               GET 
*/

Router.get("/:_id",passport.authenticate("jwt") ,async(req,res)=> {
    try{
        await validateUser(req, res)
        const {_id} = req.params;
        const getOrders = await OrderModel.findOne({user: _id});

        if(!getOrders){
            return res.status(400).json({eror: "User not found"});
        }

        return res.status(200).json({orders: getOrders});

        } catch(error){
            return res.status(500).json({error: error.message});
        }

});

/* 
* Router               /new/:_id
* Description          adding a new order
* Parameters           _id
* Access               Private
* Method               POst
*/

Router.post("/new/:_id",passport.authenticate("jwt") ,async(req,res)=>{
    try{
        const {_id} = req.params;

        const{orderDetails} = req.body;
        
        const addNewOrder = await OrderModel.findOneAndUpadate({
            user: _id
        },{
            $push: { orderDetails },
        },
            { new: true }
        
    );

    return res.json({order: addNewOrder});

    }catch(error){
        return res.status(500).json({error: error.message});

    }

});

export default Router;