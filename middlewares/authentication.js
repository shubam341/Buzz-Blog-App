//MIDDLEWRE THAT CHECK EVERY FUNCTION AND REQUEST i.e USER IS LOGGEDIN OR NOT 


const {validateToken}=require("../services/authentication");


function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookieName];
        if(!tokenCookieValue){
       return  next();
        }
          
        try{
            userPayload=validateToken(tokenCookieValue);
            req.user=userPayload;
        }
        catch(error){}
         return next();

    }
}


module.exports={
    checkForAuthenticationCookie,
}