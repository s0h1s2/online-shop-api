const jwt=require("jsonwebtoken");
const privateKey=process.env.JWT_KEY||"some-spicy-secret";
function signUser(user){
    return jwt.sign(user,privateKey);
}
function verifyUser(token){
    return jwt.verify(token,privateKey);
}
module.exports.signUser=signUser;
module.exports.verifyUser=verifyUser;
