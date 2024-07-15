import React,{useRef,useState} from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
// import 'react-datepicker-/dist/react-datepicker.css';
function EditExercise (props){
    const state= {
        username : "",
        description : "",
        duration : 0,
        date : new Date(),
        users : []    
    } 

    const usernames = useRef(null);
    const description = useRef(null);
    const [username,setUsername]= useState(usernames);
    const [descriptions,setDescriptions] = useState(description);
    const [duration,setDuration]= useState(0);
    const [date,setDate]= useState(new Date());
    const [users,setUsers]= useState([]);
    function componentDidMount(){
        axios.get('http://localhost:5000/exercises/'+ props.match.params.id) //gatting the id directly from the url
                .then(response => {
                    state.username = response.data.username;
                    state.description = response.data.description;
                    state.duration = response.data.duration;
                    state.date = new Date(response.data.date)
                })
        axios.get('http://localhost:5000/users/')
                .then(response => {
                    if(response.data.length > 0){
                        state.users.push(response.data.map(user=> user.username))
                    }
                })
    }
    function onsubmit(e){
        const exercise = {
            username : state.username,
            description : state.description,
            duration : state.duration,
            date : state.date,}
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/update' + props.match.params.id,exercise)
                .then(res => console.log(res.data));
        window.location = "/";
        }
    return(
        <div>
             <h1>Edit Exercise Log</h1>
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
                <div className="form-group">s
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary"></input>
                </div>
            </form>
            
         </div>
    )
}
export default EditExercise;