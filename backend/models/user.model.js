const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userschema = new schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,  //trim whitespace from the beginning and the end of the d=string brfore saving it to the database 
        minlength : 3 
    },
} , {
    timestamps : true , // automatically create createAt and updateAt feilds for when it was created and when it was modified 
});

const user = mongoose.model('user',userschema); //user is the name that we are going to use 
module.exports = user; // exports the model

/*
const mongoose = require("mongoose");
const schema = mongoose.schema;
const userschema = new schema({
        username : {
                type : string,
                required : true,
                trim : true,
                unique : true,
                minlength : 3},},{
                timestamps : true,
                });
const user = mongoose.model("user",userschema);
module.exports = user;

*/