const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
   
    password:{
        type:String,
        require:true,
        minLength:6
    },
    confirmpassword:{type:String,require:true},

});


userSchema.pre('save',async function(next){
    this.password= await bcrypt.hash(this.password,10);
    this.confirmpassword= await bcrypt.hash(this.confirmpassword,10)
    next()
})

const userData= mongoose.model('userData',userSchema);
module.exports=userData;