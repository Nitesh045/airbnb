const {Router} = require('express');
const router=Router();
const authController= require('../controllers/authController');
router.get('/register',authController.signup_get);
router.post('/register',authController.signup_post)
router.get('/login',authController.login_get)
router.post('/login',authController.login_post)

module.exports=router;