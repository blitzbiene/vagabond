
require("./connect.js");
const mongoose = require('mongoose');



const work = async ()=>{
    const User = require('./users');
    const me = new User({
        name:"Muzammil Nawaz",
        email:"te@gmail.com",
        password:"ndoancnd",
        image:"/lcnjknc",
        tokens:[1,2,4]
    });
    try{console.log(await me.save())}
    catch(e){
        console.log(e);
    }

    console.log(mongoose.connection.modelNames());



    mongoose.connection.close();

}
mongoose.connection.on('connected',()=>{
    work();
    
})


