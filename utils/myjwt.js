const jwt = require("jsonwebtoken");

const generateToken = (userData)=>{
      if(userData._id && userData.email)
      {
          return jwt.sign({userId:userData._id,email:userData.email},
                            "lvnsjfnvkjdsnfivdf",
                            {expiresIn:'60'});

      }
      else throw new Error("Error in tokenization");
}





module.exports = {
       generateToken
}