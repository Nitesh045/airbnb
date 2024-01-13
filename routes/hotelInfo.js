const hotelInfoRouter= require('express');

const hotelinforoute=hotelInfoRouter();

const hotelInfoController=require('../controllers/hotelInfoController');

hotelinforoute.get('/hotelInfo/:id',hotelInfoController.hotelInfo_get);

module.exports=hotelinforoute;