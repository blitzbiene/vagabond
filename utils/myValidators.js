const validator = require("validator");

const checkName = (name)=>{
    if(!name)
    throw new Error("No name found");

}

const checkMail = (email)=>{
    if(!validator.isEmail(email))
    throw new Error("Invalid Email");

}

module.exports ={
    checkName,
    checkMail
    
}