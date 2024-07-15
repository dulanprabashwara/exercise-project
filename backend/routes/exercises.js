const express = require('express');
const router = express.Router();
let exercise = require('../models/exercise.model'); // require the mongoose model 


router.route('/').get((req,res)=>{
    exercise.find()  // going to get a list of all exercises from the mongodb ATLAS databse , find method returns a promise 
        .then( exercise => res.json(exercise)) //results are returned in json format
        .catch(error => res.status(400).json( 'error'+ error)) })  //first endpoib that handles the incoming http get requests on the /user url path. 





router.route('/add').post((req,res)=>{  //first endpoib that handles the incoming http post requests on the /user url path. 
    const username = req.body.username; /// new username as part of the request body 
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date); // convert into data format 

    const newexercise = new exercise({
        username,description,duration,date,
    })
    newexercise.save() // new user is saved to the database with the save method
    .then(()=>{ res.json('exercise added!')})
    .catch(error => res.status(400).json('error' + error))
});


router.route('/:id').get((req,res)=>{  // id is the object id thst is automatically created by mongodb,  if go to exercise/ then put id the object id from the database you get a request .
    exercise.findById(req.params.id) //so we have exercise that that find by id ,then the request that params the id,get the id directly from the url here nad find by that id 
        .then(exercise=> res.json(exercise))
        .catch(err => res.status(400).json( 'error' + err))
})

router.route('/:id').delete((req,res)=>{ // going to find by id and delete
    exercise.findByIdAndDelete(req.params.id)//get it from the url
        .then(exercise=> res.json('exercise deleted'))
        .catch(err => res.status(400).json( 'error' + err))
})


router.route('/:update/:id').post((req,res)=>{ // find by id and update ,, will receive a json object that going to contain username,description,duration and date.
    exercise.findById(req.params.id)//find the current exercise and update it
        .then(exercise=> {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                    .then(()=>res.json('exercise updated'))
                    .catch( error => res.status(400).json('error' + error))
        })
        .catch(err => res.status(400).json( 'error' + err))
})

module.exports = router; //export the router 


// const express = require("express");
/* 
 const express = require("express");
 const router = express.router();
 const exercise = require("/module/exercise.model");

 router.route("/").get()
 router.route("/add").post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(re.body.duration);
    const date = date(req,body,date);
    const newexercise = new exercise({username,description,duration.date});
    newexercise.save(); //save to the database
                .then(()=>{
                    res.json("new exercise added")})
                catch(error =>{
                    res.status(400).json("error" + error)})
object id is automatically created by the datasbe 
router.route("/:id")..get((req,res)=>{
    exercise.findById(req.params.id)
            .then(exercise=>{ res.json(exercise)
            .catch(error=>{ res.status(400).json("error" + error)})})})
router.route("/:id").delete((req,res)=>{
    exercise.findByIdAndDelete(req.params.id)
            .then(exercise=>{res.json("exercise deleted")
            .catch(error =>{ res.status(400).json("error" + error)})})})
    )}
router.route("/:update/:id").post((req,res)=>{
    exercise.findById(req.params.id)
            .then( exercise=>{
                exercise.ussername = req.body.username;
                exercise.description = req.body.description;
                exercise.duration = eq.body.duration;
                exercise.date = req.body.date;
                exercise.save()
                        .then( exercise =>{
                            res.json("exercise updated")
                        .catch(error =>{ re.json("error"+ error)})})}
                        
            .catch(error =>{ res.status(400).jsoon("error" + error )}))
    })

router.route("/:update/:id").post((req,res)=>{
   exercise.findById(req.params.id)
            .then(exercise=>{
                exercis.username = req.body.username;
                exercise.description = req.body.discription;
                exercise.duration = req.body.duration;
                exercise.date = req.body.date;
                exercise.save()
                        .then(exercise =>{
                            ress.json("updated succefully")}
                        .catch(error => res.status(400).json("error" + error)))}) )
router.route("/:id").delete((re,res)=>{
    exercise.findByIdAndDelete(re.params,id)
            .then(exercise=>{re.json("deleted")
            .catch(error =>{res.json("error"+ error)})})})
router.route("/:add").post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;
    const newexercise = new exercise(username,description.duration,date)
    exercise.save()
            .then(exercise=>{res.json("updated")
            .catch(error =>{ res.json("error" + error)})})})
router.route("/:update/:id").post((req,res)=>{
    exercise.findById(req.paraamas.id)
            .then(exercise=>{
                exercise.username = req.body.username;
                exercise.description = req.body.descriptino ;
                exercise.duration = req.body.duration;
                exercise.date = req.body.date;
                exercise.save()
                        .theen(exercise=>{ res.json("updated")
                        .catch(error)=>{res.json("error" + error)}})})})
module.exports = exercise;
module.exports = exercise;

*/