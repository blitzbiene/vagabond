const User= require('../../models/users');

module.exports = (req,res,next)=>{
    try{
        if(req.body.creator===req.user.userId)
        next();
        else throw new Error();

    }
    catch(err)
    {
        res.status(404).json({msg:"User check Error"});
    }

}