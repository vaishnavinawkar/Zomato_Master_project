//Auth means AUthentication

//Library
import express from 'express';
import passport from 'passport';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
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
            await UserModel.findByEmailAndPhone(req.body.credentials);
            const newUser = await UserModel.create(req.body.credentials);
            const token = newUser.generateJwtToken();
            return res.status(200).json({token, status: "success"});
            
        }catch(error){
            return res.status(500).json({error: error.message});
        }
});


/* 
* Router               /singin
* Description          sign-in with email and password
* Parameters           none
* Access               Public
* Method               Post (POST method)
*/


Router.post("/signin" , async (req, res) => {
    try{
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({token,status: "success"});

    }catch(error){
        return res.status(500).json({error: error.message});    }
});

/* 
* Router               /singin
* Description          sign-in with email and password
* Parameters           none
* Access               Public
* Method               Get(POST method)
*/

Router.get("/google",passport.authenticate("google",{scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
]
})
);

/* 
* Router               /google/call back
* Description          Google signin callback
* Parameters           none
* Access               Public
* Method               GET 
*/

Router.get("/google/callback", passport.authenticate("google", {
        failureRedirect: "/"
    }),

    (req,res)=> {
        return res.status(200).json({token: req.session.passport.user.token, status:"success"});
    }
)


export default Router;
