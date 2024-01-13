const hotelModel= require('../backend/models/amazingView');
const hotelRouter= require('../routes/hotelRoutes');

let multer = require('multer');
let storage = multer.diskStorage({
    destination:'./public/img/amazingView',
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});

let upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=='image/jpeg'|| file.mimetype=='image/jpg' || file.mimetype=='image/png' ||file.mimetype=='image/gif' ){
            cb(null,true)
        }else{
            cb(null,false)
            cb(new Error('only jpeg,jpg,gif,png'))
        }
    }
});


module.exports.uploadHotel_get=(req,res)=>{
    res.render('uploadHotel')
}

module.exports.uploadHotel_post= upload.single('hotelImg'), async (req,res)=>{
   try {
    const registerHotel = new hotelModel({
        category:req.body.category,
        country:req.body.country,
        image:req.file.filename,
        city:req.body.city,
        price:req.body.price,
        nameOfhouse:req.body.nameOfhouse,
       
        hostName:req.body.hostName,
       });
       const hotelResult = await registerHotel.save();
       console.log(hotelResult);
       res.send('data adde')
   } catch (error) {
    console.log(error)
   }

}