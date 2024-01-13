const userData = require('../backend/models/user');
const { router } = require('../routes/authRoutes');
const bcrypt= require('bcryptjs');

const jwt= require('jsonwebtoken');
const maxAge= 3*24*60*60;
const createToken =(id)=>{
    return jwt.sign({id},'qwertyuioplkjhgfdsazxcvbnm',{
        expiresIn:maxAge
    });
};

module.exports.signup_get=(req,res)=>{
    res.render('register')
};

module.exports.signup_post= async(req,res)=>{
    try {
        
        const password=req.body.password;
        const confirmpassword=req.body.confirmpassword;
        
        if(password==confirmpassword){
            const registerUser= new userData({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })
            const registerResult =await registerUser.save()
            const token = createToken(registerResult._id);
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
            //console.log(token)
            res.status(201).render('home')
        }
    } catch (e ) {
        res.send('error')
        console.log(e)
    }
}

module.exports.login_get=(req,res)=>{
    res.render('login')
}

module.exports.login_post=async(req,res)=>{
    const password= req.body.password;
    const email= req.body.email;
    const userDetails= await userData.findOne({email:email});
    const matchedpas= bcrypt.compare(password,userDetails.password)
    const token= createToken(userDetails._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
    if(matchedpas){
        res.status(200).render('home')
        console.log(userDetails._id)
    }

}