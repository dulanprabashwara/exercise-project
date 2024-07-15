import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Exercise(props){
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td> //date includes date,time and the timezone  ,,we only want the date
        <td><link to={"/edit/" + props.exercise._id}>Edit</link><a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>Delete</a></td>
    </tr>
}


function ExercisesList (){
    const[deleteExercise,setDeleteExercise]= useState();
    const exercises = []; 
    function componentDidMount(){
        axios.get('http://localhost:5000/exercises')
            .then(response=> {
                exercises.push(response.data)
            })
            .catch(error => {console.log(error);})
    }
    function deleteexercise(id){ // object id
        axios.delete('http://localhost:5000/exercises',id)
            .then( res => console.log(res.data));
            exercises.filter(el=> el._id != id)  // _id has the object id in the database
    }
    function ExercisesList(){
       return exercises.map(currentexercise=>{
            return <Exercise exercise={currentexercise} deleteexercise={deleteexercise()} key={currentexercise._id}/>
        })
    }
    
    return(
        <div>
           <h3> Logged Exercises</h3>
           <table className=" table">
            <thead className="thread-light">
                <tr>
                    <tr>Username</tr>
                    <tr>Description</tr>
                    <tr>Duration</tr>
                    <tr>Date</tr>
                    <tr>Actions</tr>
                </tr>
            </thead>
            <tbody>
                {ExercisesList()}
            </tbody>
            </table>
        </div>
            
    )
}
export default ExercisesList;