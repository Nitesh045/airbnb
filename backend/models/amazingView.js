const mongoose= require('mongoose');

const hotelSchema= new mongoose.Schema({
    category:{
    type:String,
    require:true,
   },
   country:{
    type:String,
    require:true,
   },
   hotelImg:{
    type:Array,
    require:true
   },
   city:{
    type:String,
    require:true,
   } ,
   price:{
    type:Number,
    require:true,
   },
   nameOfhouse:{
    type:String,
    require:true,
   },
  
   hostName:{
       type:String,
       require:true,
   }
});

const hotelModel=  mongoose.model('hotelModel',hotelSchema);
module.exports=hotelModel;