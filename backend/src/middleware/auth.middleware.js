const auth=(req,res,next)=>{
        if(!req.session.username){
        return res.status(401).json({message:"No token provided"});
    }
    next();
    
}
module.exports=auth;