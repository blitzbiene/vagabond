const route = require("express").Router();
const multer = require("multer");
const upload = multer({dest:`${__dirname}/../uploads`,onError:(err,next)=>{next()}});


const cb = (error)=>{
    console.log(error);
}
route.post('/',upload.none(), (req,res,next)=>{
   
    console.log(req.headers);
    console.log(req.files);
    console.log(__dirname);

    
    next();
},upload.single('image'),(req,res,next)=>{
    res.send('done');
}
);
module.exports = route;