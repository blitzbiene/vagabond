const User = require("../models/users");



const getUsers = async (req,res,next)=>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch(e)
    {
        res.status(500).json({msg:"internal server error"});
    }
    
    res.send("tester"); 
}

module.exports.getUsers = getUsers;