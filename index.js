const express = require("express");
const app = express();



app.get('/',(req,res)=>{
    res.send("initial setup");
})



app.listen(5000,()=>{
    console.log("sever started");
})