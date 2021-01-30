const Place = require("../../models/places");
const User = require("../../models/users");

module.exports = async (req,res,next)=>{
       
       try{
              const uid = req.params.uid;
              console.log(uid);
              if(!uid)throw new Error('no userid found');
              const places = await Place.find({creator:uid});

              return res.json(places);



       }
       catch(err){
              return res.status(500).json({msg:err.message});
       }


       //res.send("getplacebyuser"+req.params.uid);

}