module.exports = (req,res,next)=>{
    res.send(req.params.pid);
}