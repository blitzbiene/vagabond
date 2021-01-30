const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
       title:{type:String,required:true},
       description:{type:String,required:true},
       image:{type:String,required:true},
       address:{type:String,required:true},
       location:{
           latitude:{type:Number,required:true},
           longitude:{type:Number,required:true}
           
       },
       creator:{type:mongoose.Types.ObjectId,required:true,ref:'Users'}
});

module.exports = mongoose.model('Places',placeSchema);