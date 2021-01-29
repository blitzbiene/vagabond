const bcrypt = require("bcrypt");

const encryptText = (password)=>{
    return bcrypt.hashSync(password,10);
}

const passwordCheck = async (plaintext,hash)=>{

     try{
         if(await bcrypt.compare(plaintext,hash))
         return true;
         else throw new Error();

     }
     catch(err)
     {
         throw new Error("password is incorrect.");
     }


}








module.exports = {
    encryptText,
    passwordCheck
}






