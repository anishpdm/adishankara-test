//Create a Model
var mongoose=require('mongoose')

var Users=mongoose.model('Users',{
    name:{type:String,
          required:true,
          minlength:2,
          trim:true
  
  },
    age:{type:Number}  
  });
  module.exports={Users}