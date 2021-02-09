module.exports = (req,res,next)=>{
    if(!req.file)
    return res.status(404).send({msg:"upload error"});
    
    try{
    const {email,name,password} = JSON.parse(req.body.userData);
    req.body.email = email;
    req.body.password = password;
    req.body.name = name;
    req.body.image = 'uploads/images/'+req.file.filename;
    next();
    }
    catch(err){
        res.status(500).send({msg:err.message})
    }

    
}