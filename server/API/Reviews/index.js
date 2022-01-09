//Libraries
import express from "express";

//Database modal
import { ReviewModel } from "../../database/allModels";

const Router= express.Router();
/* 
* Router               /:resid
* Description           GEt all reviews for a particular resturant
* Parameters            resid
* Access                Public
* Method                GET
*/

Router.get("/:resid", async(req, res)=> {
    try{
        const {resid} = req.params;

        const reviews = await ReviewModel.find({restaurants: resid});

        return res.json({reviews});

    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
* Router               /new
* Description          Post : adding new food /resturant review and rating
* Parameters           none
* Access               Public
* Method               POst
*/

Router.post("/:new", async(req,res) => {
    try{
        const {reviewData} = req.body;

        await ReviewModel.create({...reviewData});

        return res.json({reviews: "Successfully created Review"});
    }catch(error){
        return res.status(500).json({error: error.message});

    }

});

/* 
* Router               /delete/:_id
* Description          delete a specific review
* Parameters           _id
* Access               Public
* Method               DELETE
*/

Router.delete("/delete/:_id", async(req, res)=> {
    try{
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "successfully deleted the review."});

    }catch(error){
        return res.status(500).json({error: error.message});

    }
});


export default Router;