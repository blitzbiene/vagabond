const Place = require("../../models/places");
module.exports = async (req,res,next)=>{

    try{

         console.log(req.user);
         const placeToBeDeleted = await Place.findOne({_id:req.params.pid});
         console.log(placeToBeDeleted);
         if(req.user.userId!=placeToBeDeleted.creator)throw new Error("user not matched");
         await Place.deleteOne({_id:req.params.pid});  
         res.send({msg:"deleted"});

    }catch(err)
    {
        console.log(err.message);
        res.status(404).json({msg:"bad request"});
    }
}