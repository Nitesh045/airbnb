const express = require('express');
const app= express();
const multer= require('multer');
const dotenv= require('dotenv');
dotenv.config();
console.log(process.env.MONGODB_URL)
//const requireAuth=require('./middleware/authmiddleware')
const authRoute= require('./routes/authRoutes')
//const hotelRouter= require('./routes/hotelRoutes')
const cookieParser= require('cookie-parser');
app.use(express.json());
app.use(cookieParser())
const {requireAuth,checkUser}=require('./middleware/authmiddleware')
app.use(express.urlencoded({extended:false}))

const database= require('./backend/conn/db');
const hotelModel= require('./backend/models/amazingView');

//const hotelRouter = require('./routes/hotelRoutes');
const hotelinfo=require('./routes/hotelInfo')


app.set('view engine','ejs');
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.get('*',checkUser)
app.get('/',async(req,res)=>{
    
    try {
        const hotelAmazing=await hotelModel.find({category:"Amazing"})
        .then((data)=>{
          res.render('home',{data});
          //console.log(data)
        })
        .catch ((e)=>console.log(e))
    } catch (error) {
        res.end();
        console.log(error)
    }
});







app.get('/uploadHotel',(req,res)=>{
    res.render('uploadHotel')
});



let storage = multer.diskStorage({
    destination:'./public/img/amazingView',
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});

let upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=='image/jpeg'|| file.mimetype=='image/jpg' || file.mimetype=='image/png' ||file.mimetype=='image/gif'||file.mimetype=="image/webp" ){
            cb(null,true)
        }else{
            cb(null,false)
            cb(new Error('only jpeg,jpg,gif,png'))
        }
    }
});

app.post('/uploadHotel',upload.array('hotelImg'),async(req,res)=>{
    try {
        
        const registerHotel = new hotelModel({
            category:req.body.category,
            country:req.body.country,
            hotelImg:req.files,
            city:req.body.city,
            price:req.body.price,
            nameOfhouse:req.body.nameOfhouse,
           
            hostName:req.body.hostName,
           });
           const hotelResult = await registerHotel.save();
           console.log(hotelResult);
           res.redirect('/')
       } catch (error) {
        console.log(error)
       }
    
})


app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`)
})

app.use(authRoute);

//app.use(hotelRouter)


app.use(hotelinfo);