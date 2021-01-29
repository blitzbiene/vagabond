const myValidators = require("../../utils/myValidators");
const security = require("../../utils/security");
const User = require("../../models/users");
const myjwt = require("../../utils/myjwt");
const {checkUserExists} = require("./helper");


const createUser = async (name,email,password,image)=>{
      const user = new User({
            name,email,password,image

      });
      try{
          const userData = await user.save();
          return userData;
      }
      catch(err)
      {
          throw new Error("Server Error");
      }
}



const signUp = async (req,res,next)=>{

    const {name,email,password,image} = req.body;
    try{
        myValidators.checkName(name);
        myValidators.checkMail(email);
        await checkUserExists(email);
        hashPassword = security.encryptText(password);
        await createUser(name,email,hashPassword,image);
        const userData = await User.findOne({email},'-password');
        const token = myjwt.generateToken(userData);
        console.log(token);

        return res.status(201).json({userId:userData._id,email:userData.email,
        token});
        
        
        

        
    }
    catch(e){
        return res.status(404).json({msg:e.message});
    }
     
     
     res.send("Signup route");

}
module.exports  = signUp;