const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    image:{type:String,required:true},
    places:[{type:mongoose.Types.ObjectId,ref:'Places',required:true}]

});
module.exports =  mongoose.model('Users',userSchema);