import React, { useRef, useState } from "react";
import axios from 'axios';  //send http requets to the server end points in the backend, connect frontend to the backend
function CreateUser (){
    const username = useRef("");
    // this.onChangeUsername = this.onChangeUsername.blind(this);
    // this.onSubmit = this.onSubmit.blid(this);
    const [state,setState] = useState(username)
   
    function onsubmit(e){
        e.preventDefault(); /// when click kthe submit button prevent the submit behavior from taking place
        const user={
            username : String(state),
            
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add',user) //send the user data to the backend,,, url and the data that shares to the backend ,,, send a http post request to the backend endpoint
                .then((res)=> console.log(res.data))
        setState("") //after the user has been submitted, make the username feild empty to add more users 
    }
    return(
    <div>
        <h3> Create User </h3>
        <form onSubmit= {onsubmit} >
                <div className="form-group">
                    <label> useername : </label>
                    <input type="text" required className="form-control" value={state} onChange={(e)=> setState(e.target.value)} ref={username}></input>
                </div>
                <div className="form-group">
                    <input type ="submit" value="Create User"  className=" btn btn-primary"></input>
                </div>
            </form> 
    </div>
    )
}
export default CreateUser;