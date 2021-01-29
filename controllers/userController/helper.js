const User = require('../../models/users');

const checkUserExists = async (email)=>{
    try{
        const existingUser = await User.findOne({email:email});
        if(existingUser)throw new Error("User Exists");
    }
    catch(err){
        throw new Error(err.message);
    }

}

checkLoginMail = async (email)=>{
    try{
        const existingUser = await User.findOne({email:email});
        if(!existingUser)throw new Error("Email is invalid.");
        return existingUser;
    }
    catch(err){
        throw new Error(err.message);
    }
}

module.exports ={
    checkUserExists,
    checkLoginMail
}