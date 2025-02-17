// USING jwt TOKENS

const JWT =require("jsonwebtoken");


//CREATING SECRET
const secret="SuperShubam123@";

//CREATING TOKEN for user object
function createTokenForUser(user){
    const payload={
        _id:user.id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    };
    const token=JWT.sign(payload, secret);
    return token;
}


//returning token
function validateToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}




module.exports={
    createTokenForUser,
    validateToken,
}