//babel is the compiler of javascript it convert the es6 version of js to the es5

// import {UserModel}  from "./database/allModels";
//  const UserModel = require("./database/user");


const mongoose =require('mongoose');
require("@babel/core").transform("code",{
    presets: ["@babel/preset-env"],
});

require('dotenv').config()
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

//Database connection
import ConnectDB from './database/connection';

require("@babel/core").transform("code",{
    presets: ["@babel/preset-env"],
});

const zomato = express();
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());


//Import the mongoose module

//Set up default mongoose connection
// const mongoDB = process.env.MONGODB_URL;
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"));


// // http://localhost:5000/
// app.get("/", (req, res) => {
//     return res.json({"WELCOME": `to my Backend Software for the ZOMATO-MASTER`});
// });

// /*
// Route            /movies
// Description      Get all the movies
// Access           PUBLIC
// Parameter        NONE
// Methods          GET
// */
// // http://localhost:5000/movies
// app.get("/movies", async (req, res) => {
//     const getAllMovies = await MovieModel.find();
//     return res.json(getAllMovies);
// });

// /*
// Route            /movies/:id
// Description      Get a single movie
// Access           PUBLIC
// Parameter        NONE
// Methods          GET
// */
// // http://localhost:5000/movie/:id
// app.get("/movie/:id", async (req, res) => {
//     const {id} = req.params;
//     const getMovie = await MovieModel.findOne({_id: id});
//     return res.json(getMovie);
// });

// /*
// Route            /user-register
// Description      Post sinlge user details in users collection
// Access           PUBLIC
// Parameter        NONE
// Methods          POST
// */
// // http://localhost:5000/user-register
// app.post("/user-register", async (req, res) => {
//     const addNewUser = await UserModel.create(req.body);
//     return res.json( {userAdded: addNewUser, message: "User was added !!!"} );
// });

zomato.listen(4000, () => {
    //this function is a promise function
    ConnectDB().then(() => {
        //.then is that happening at the success
        console.log("Server is running !!!")
    }).catch((error) => {
        //.catch for error
        console.log("Server is running , but database connect failed ....");
        console.log(error);
    });
    
});