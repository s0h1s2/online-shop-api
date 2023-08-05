const { verifyUser }=require("../util/jwt");
module.exports.authRequire=function(req,res,next){
    const token=req.headers["x-auth"];
    try {
        const decoded=verifyUser(token);
        console.debug(decoded);
        return next();
    } catch (error) {
            return res.status(401).send({error:"User authentication is required or 'x-auth' header is not set."});
    }
}