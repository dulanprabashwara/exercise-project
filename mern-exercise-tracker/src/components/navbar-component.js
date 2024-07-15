import React,{Component} from "react";

import { Link } from "react-router-dom";
import ExercisesList from "./exercises-list-component";
import CreateExercise from "./create-exercise-component";
import EditExercise from "./edit-exercises-component";
function Navbars (){
    return(
        <div>
   <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist" >
    < Link to="/">    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Exercise Tracker</button>
    </Link>
<Link to="/create"><button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Create Exercise</button>
</Link>  
<Link to="/edit:id"><button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Edit Exercise</button>
</Link>   
<Link to="/user"><button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >Create user</button>
</Link>  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>


        </div>
    )
}
export default Navbars;