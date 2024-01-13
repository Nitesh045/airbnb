const {Router} = require('express');
const hotelRouter=Router();
const hotelController=require('../controllers/hotelController')

hotelRouter.get('/uploadHotel',hotelController.uploadHotel_get)
hotelRouter.post('/uploadHotel',hotelController.uploadHotel_post)

module.exports=hotelRouter;