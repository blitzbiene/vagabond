const User = require("../../models/users");

module.exports = async (req,res,next)=>{
    try{
        const user = await User.findOne({_id:req.query.id},'-password');
        res.json(user);


    }catch(err){
        res.status(404).json({msg:"error occured"});
    }
  
}