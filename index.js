const express = require("express");
const  mongoose  = require("mongoose");
const app = express();

const bodyParser = require("body-parser");
const userRouter = require("./routes/users-route");
const placeRouter = require("./routes/places-route");

app.use(bodyParser.json());
app.use('/api/users',userRouter);
app.use('/api/places',placeRouter);




mongoose.connect("mongodb://localhost:27017/vagabond",
                {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('connected',()=>{
    console.log(mongoose.connection.modelNames());
    app.listen(5000,()=>{console.log("server started");})
});


