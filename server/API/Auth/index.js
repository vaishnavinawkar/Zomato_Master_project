//Auth means AUthentication

//Library
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//Models
import {UserModel} from "../../database/allModels";


//Create a router

const Router = express.Router();

/* 
* Router               /singup
* Description          register new user
* Parameters           none
* Access               Public
* Method               Post (POST method)
*/

// async (asyncronize - promise base) it wait for sometime to execute the program
//try catch is - if some error tacl is goes to the catch 
Router.post("/signup", async(req,res)=>{
    try{
        //whenever the req is send in the req.body the object known as credentials and that object contain all this values {email,password,fullName,phoneNumber}.
        const {email,password,fullName,phoneNumber} = req.body.credentials;
        //line no 29-30 check that is there any account already exits with the eamil or phoneNumber .
        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByPhone){
            return res.json({user: "User alredy exists!"})
        } 
        //hash password
        const bcryptSalt = await bcrypt.genSalt(8);
        //line no 37: generaly states that we are salting the password 8 times in a loop.
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //save data to database
        await UserModel.create({...req.body.credentails, password: hashedPassword});

        //generate A JWT auth token (package name is jsonwebtoken)
        //JWT stand for json web token
        //token is also a type of encryption
   
        const token = jwt.sign({ user: {fullName,email} }, "ZomatoApp");
         //ZomatoApp would be used to convert this object into a token
         //ZomatoApp is a secret string
         //tokens cannot be decrypted 
         //tokens are used to authorise that the person is you are not

         return res.status(200).json({token, status: "success"});
        }catch(error){
          return res.status(500).json({error: error.message});
    }
});

export default Router;
