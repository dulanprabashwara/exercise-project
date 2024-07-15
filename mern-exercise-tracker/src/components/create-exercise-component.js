
import React, { useRef, useState } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
function CreateExercise (props){

    // this.onChangeUsername = this.onChangeUsername.bind(this); // bind this to each of this mathods 
    // this.onChangeDescription = this.onChangeDescription(this);
    // this.onChangeDuration = this.onChangeDescription(this);
    // this.onChangeDate = this.onChangeDate(this);

    const state={   // state id how you basically create variables in react 
        username : "",
        decription : "",
        duration : 0,
        date : new Date(),
        users : [],}
    const usernames = useRef(null);
    const description = useRef(null);
    const [username,setUsername]= useState(usernames);
    const [descriptions,setDescriptions] = useState(description);
    const [duration,setDuration]= useState(0);
    const [date,setDate]= useState(new Date());
    const [users,setUsers]= useState([]);
    function componentDidMount(){//automatically be called right before anything display on the page 
        axios.get('http://localhost:5000/users')
        .then(response => {
            if(response.data.length > 0){
                setUsername(response.data[0].username);
                state.users.push(response.data.map(user=> user.username));
                users.push(response.map(user=>user.username));
            }
    })

    }
    // function onChangeUsername(e){
    //     setState(state.username= e.target.value)
    // }
    // function onChangeDescription(e){
    //     setDescriptions(descriptions=  e.target.value)
    // }
    // function onChangeDuration(e){
    //     setState(state.decription= e.target.value)
    // }
    // function onChangeDate(date){
    //     setState(state.date= date)
    // }
    function onsubmit(e){
        e.preventDefault(); /// when click kthe submit button prevent the submit behavior from taking place
        const exercise ={
            username : username,
            description : descriptions,
            duration : duration,
            date : date
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise);
        window.location = "/"; //after the exercise has been submitted, take back to the homepage wherre the list of exercises
    }
    return(

        <div>
            <h1>Create New Exercise Log</h1>
            <form onsubmit={onsubmit}>
                <div className=" form-group">
                    <label>username : </label>
                    <select ref={usernames} required className="form-control " value={username} onChange={(e)=>setUsername(e.target.value)}>
                        {
                            users.map( user=>{
                                return <option key={user} value={user}>{user}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group" >
                    <label>description</label>
                    <input type="text" value={descriptions} ref={description} onChange={(e)=> setDescriptions(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Duration ( in munites) : </label>
                    <input type="text" className="form-control" value={duration} onChange={(e)=>{setDuration(e.target.value)}}/>
                </div>
                <div className=" form-group" >
                    <label>Date:</label>
                    <div>
                        <DatePicker selected = {date} onChange={ (e)=> setDate(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}
export default CreateExercise;