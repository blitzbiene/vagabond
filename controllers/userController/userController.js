const User = require("../../models/users");
const signUp = require("./signUp");
const logIn = require('./login');



const getUsers = async (req,res,next)=>{
    try{
        const users = await User.find({},'-password');
        res.status(200).json(users);
    }
    catch(e)
    {
        res.status(500).json({msg:"internal server error"});
    }
}







module.exports= {
    getUsers,
    logIn,
    signUp
}