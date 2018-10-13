
const express = require('express');
var mongoose=require('./mongoose_db');
var {Users}=require('./userModel');
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());

app.post('/userentry',(req,res)=>{
    // console.log(req.body);
// Passing a Value to the model
var users= new Users(
    {name:req.body.name,
      age:req.body.age}
);
users.save().then( (data)=>{
    console.log('Succesfully saved',data)
},(e)=>{
    console.log('Error',e)   
} )

})







app.listen(3000,()=>{
    console.log('Started');
})



