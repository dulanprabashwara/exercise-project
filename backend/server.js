const express = require('express');   // a web application framework for node.js
const cors = require('cors'); //unblock resource sharing
require('dotenv').config(); //call the config fuction of dotenv
const mongoose = require('mongoose'); // connect to mongodb atlas throgh the mongoose driver
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser : true})    //mongodb node js server driver rewrote the tool it uses to parse mongodb connection strings.and because this is such a big change,they put the new connection string parser brhind a flag.and it cached similar for this user create index true, it's to deal  with a mngodb with mongodb deprecating the ensue index function
        .then(()=> console.log("successfull"))
        .catch((error)=> {console.log(error)})
const connection = mongoose.connection;
connection.once('open',()=>{  // once the connection is open it's going to log that mongodb database connection established succesfully 
    console.log(" mongodb databse connection established succesfully");
})



const exerciserouter = require('./routes/exercises'); //require the files to to tell server to use the files
const userrouter = require('./routes/users')

app.use('/exercises', exerciserouter); // when someone is going to root url and type /exercises it's going to load eveything in the exercies router
app.use('/users',userrouter);



app.listen(port,()=>{
    console.log(`server is running on port ${ port}`);
})

// mongodb automatically created and the object id , createdat and updatedat 
//should update the ip address in network access in clusters when use back


/*
http://localhost:5000/exercises/
http://localhost:5000/exercise/
http://localhost:5000/exercise/
http://localhost;5000/exercises
const express = require('express;);
const cors = requie('cors'); // unblock resource sharing
require('dotenv).config();
const mongoose = require('mongoose');
const app = express();
const port = process.env.port|| 5000;
require('dotenv').config();
app.use(cors());
app.use(express.json())
const uri = process.env.atlas_uri;
mongoose.connect(uri,{usenewurlparser : true})
            .then( ()=> console.log(" succefully connected"))
            .catch(error => { console.log(`error` + error)})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("connected to database successfully")}
const exerciserouter = require('router/exercise');
const usersrouter = require("/router/users");
app.use("/exercise",exerciserouter);
app.use("/users",usersrouerr);    
app.listen(port, ()=>{
    console.log(" server is running on port ${port}")});





*/