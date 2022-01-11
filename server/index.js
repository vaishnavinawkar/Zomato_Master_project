//babel is the compiler of javascript it convert the es6 version of js to the es5

// import {UserModel}  from "./database/allModels";
//  const UserModel = require("./database/user");


// const mongoose =require('mongoose');
// require("@babel/core").transform("code",{
//     presets: ["@babel/preset-env"],
// });

require('dotenv').config();
//this all are the old version ES5
// const express = require("express");
// const cors = require('cors');
// const helmet = require("helmet");
//helmet is securing the express application by giviang the http headezomato
// const mongoose =require('mongoose');

//now we are writting the same with the ES6
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//Database connection
import ConnectDB from './database/connection';

//google authentication config
import googleAuthConfig from './config/google.config';

// private route authentication config
import privateRouteConfig from './config/route.config';

// require("@babel/core").transform("code",{
//     presets: ["@babel/preset-env"],
// });

//API
import Auth from "./API/Auth";
import Restaurant from './API/Restaurant';
import Food from './API/Food';
import Menu from './API/Menu';
import Image from './API/Image';
import Order from './API/Orders';
import Review from './API/Reviews';
import User from "./API/User";

//passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());
// zomato.use(passport.session());


//Application Routes
// it means that if you go to the
// localhost:4000/auth/singup it directly go to the auth API
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order",Order);
zomato.use("/review",Review);
zomato.use("/user", User);


zomato.listen(4000, () => {
    //this function is a promise function
    ConnectDB()
    .then(() => {
        //.then is that happening at the success
        console.log("Server is running !!!")
    })
    .catch((error) => {
        //.catch for error
        console.log("Server is running , but database connect failed ....");
        console.log(error);
    });
    
});

