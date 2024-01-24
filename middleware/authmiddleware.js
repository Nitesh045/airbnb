const jwt= require('jsonwebtoken');
const userData=require('../backend/models/user');

const requireAuth=(req,res,next)=>{
    const token= req.cookies.jwt;
    if(token){
        jwt.verify(token,'qwertyuioplkjhgfdsazxcvbnm',(err,decodedtoken)=>{
            if(err){
                console.log(err)
                res.redirect('/login');
            }else{
                console.log(decodedtoken)
                next()
            }
        })
    }else{
        res.redirect('/login')
    }
}

const checkUser=(req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
       
        jwt.verify(token,'qwertyuiooplkjhgfdazxcvbnm', async(err,decodedtoken)=>{
            if(err){
             console.log(err);
             
             res.locals.user=null;
             next()
            }else{
            // console.log(decodedtoken);
             let user= await userData.findById(decodedtoken.id)
            // console.log(user)
             res.locals.User=user;
                next();
            }
         })
    }else{
      res.locals.user=null;
      next();
    }
  }
module.exports={requireAuth,checkUser};