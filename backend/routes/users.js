const express = require('express');
const router = express.Router();
let user = require('../models/user.model'); // require the mongoose  model 



router.route('/').get((req,res)=>{
    user.find()  // going to get a list of all users from the mongodb ATLAS databse , find method returns a promise 
        .then( users => res.json(users)) //results are returned in json format
        .catch(err => res.status(400).json( 'error'+ err)) })  //first endpoib that handles the incoming http get requests on the /user url path. 





router.route('/add').post((req,res)=>{  //first endpoib that handles the incoming http post requests on the /user url path. 
    const username = req.body.username; /// new username as part of the request body 
    const newuser = new user({username});  //create a newe instance of user using username 
    newuser.save() // new user is saved to the database with the save method
    .then(()=>{ res.json('user added!')})
    .catch(err => res.status(400).json('error' + err))
})


module.exports = router; //export the router 


/*
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router;
const user = require("..models/user.model");
router.Route("/").get((req,res)=>{
    user.find()
        .then(user=>{
            res.json(user)
        .catch(error =>{
            res.status(400).json("error" + error)})})
    })
router.route("/add").post((req,res)=>{
    const username = req.body.username;
    const newuser = new user({username})
    newuser.save()
            .then(user=>{res.json("user added")
            .catch(error =>{ res.status(400).json("error" + error)})})})  

module.exports = router;

*/