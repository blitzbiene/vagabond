const User= require('../../models/users');

module.exports = (req,res,next)=>{
    try{
        
        if(!req.body || !req.file)throw new Error("data missing");
        console.log(req.body);
        console.log(req.file);
       
        if(req.body.creator===req.user.userId)
        {
            req.body.image = `uploads/images/${req.file.filename}`;
            req.body.location = {
                latitude:req.body.latitude,
                longitude:req.body.longitude
            }
            next();
        }
        else throw new Error("who are you");

    }
    catch(err)
    {
        res.status(404).json({msg:err.message});
    }

}