const express = require("express");
const  mongoose  = require("mongoose");

const path = require("path");
const cors = require("cors");

const bodyParser = require("body-parser");
const userRouter = require("./routes/users-route");
const placeRouter = require("./routes/places-route");
const testRouter = require("./routes/testRoute");

const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/uploads/images',express.static(path.join('uploads','images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });
app.use('/api/users',userRouter);
app.use('/api/places',placeRouter);
app.use('/test',testRouter);





mongoose.connect("mongodb://localhost:27017/vagabond",
                {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('connected',()=>{
    console.log(mongoose.connection.modelNames());
    app.listen(5000,()=>{console.log("server started");})
});


