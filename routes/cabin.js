const express= require('express');

const cabinRoute=express.Router();

const cabinController=require('../controllers/cabinController');

cabinRoute.get('/cabin',cabinController.capin_get);

module.exports=cabinRoute;