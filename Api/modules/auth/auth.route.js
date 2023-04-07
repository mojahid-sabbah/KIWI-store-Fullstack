const authController = require('./auth.controller/auth.controller');
const router = require('express').Router(); 

 
router.post("/signup" , authController.signup)
router.get("/confirmEmail/:token" , authController.cofirmEmail)
router.post("/signin" , authController.signin)
module.exports=router 