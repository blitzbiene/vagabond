const {checkLoginMail} = require("./helper");
const {passwordCheck} = require("../../utils/security");
const {generateToken} = require("../../utils/myjwt");




const logIn = async (req,res,next)=>{

    const {email,password} = req.body;
    if(email && password)
    {
        try{
            const user = await checkLoginMail(email);
            await passwordCheck(password,user.password);
            const token = await generateToken(user);
            return res.json({userId:user._id,email:user.email,token});

        }
        catch(err){
            return res.status(404).json({msg:err.message});
        }
        
    }
    else {
        return res.status(404).json({msg:"data missing"});
    }
    res.send("login route");

     
}


module.exports = logIn;