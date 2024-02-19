const cabinRoute=require('../routes/cabin');
const database = require('../backend/models/amazingView');


module.exports.capin_get=async(req,res)=>{
    try {
        const hotelAmazing=await database.find({category:"Cabin"})
        .then((data)=>{
          res.render('cabin',{data});
          //console.log(data)
        })
        .catch ((e)=>console.log(e))
    } catch (error) {
        console.log(error)
    }
};