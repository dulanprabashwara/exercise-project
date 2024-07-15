const mongoose = require('mongoose');
const schema = mongoose.Schema;

 const exerciseschema = new schema({
    username: { type : String, required : true},
    description : { type : String , required : true},
    duration : {type :Number , required : true},
    date : { type : Date , required  : true},
 },{
    timestamps : true,  //to automatically add createAdd and updateAdd feilds to document 
 });


// add API end points rounds so that server can use to perform the crud application ,the crud operations which is create,update and delete 

 const exercise = mongoose.model('exercise', exerciseschema);  //create a model named exercise based on exerciseschema
 module.exports = exercise; 
/*


const mongoose = require('mongoose ');
const schema = mongoose.schema;
const exerciseschema = new schema({
            username : {type: string, required : true},
            description : { type : string, required : true },
            duration : {type: number , required : true},
            date : {type : Date, required : true},}
            {
            timestamps : true ,
            })
const exercise = mongooose.model("exercise",exerciseschema);
module.exports = exercise;            

const mongoose = require('mongoose');
const schema = mongoose.schema;
const exerciseschemaa = new schema({
            username : {type : string, required : true},
            description : {type: string , required : true},
            duration : {type : Dadte, required : true},
            date : { type : Date  , required : true},},{
            timestamps : true ,
            })
const exercise = mongoose.model("exercise", exerciseschema);
module.exports = exercise;
*/


