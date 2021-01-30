const jwt = require("jsonwebtoken");
const SECRET_KEY =  "lvnsjfnvkjdsnfivdf";

const generateToken = (userData)=>{
      if(userData._id && userData.email)
      {
          return jwt.sign({userId:userData._id,email:userData.email},
                           SECRET_KEY,
                            {expiresIn:'1h'});

      }
      else throw new Error("Error in tokenization");
}

const checkToken = (token)=>{
      return jwt.verify(token,SECRET_KEY);
}





module.exports = {
       generateToken,
       checkToken
}