import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbars from "./components/navbar-component";
import EditExercise from "./components/edit-exercises-component";
import CreateExercise from "./components/create-exercise-component";
import CreateUser from "./components/create-user-component";
import ExercisesList from "./components/exercises-list-component";


function App() {
  return (
    
      <BrowserRouter>
            <Navbars/>

      <div className="container">
        <Routes>
          <Route path="/" element={<ExercisesList/>}></Route>
          <Route path="/edit:id" element={<EditExercise/>}></Route>
          <Route path="/create" element={<CreateExercise/>}></Route>
          <Route path="/user" element={<CreateUser/>}></Route>
          

        </Routes>
        </div>
      </BrowserRouter>

    
  );
}

export default App;
