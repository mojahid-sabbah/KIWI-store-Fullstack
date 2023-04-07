 const { auth, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../../meddilewear/verifyTokenandauth');
const UserController = require('./user.controller/User.controller');
const router = require('express').Router();

router.get("/getallusers" ,verifyTokenAndAdmin,UserController.getAllUsers)
router.get("/stats" ,verifyTokenAndAdmin,UserController.stats)
router.get("/newestUsers" ,verifyTokenAndAdmin,UserController.newestUsers)
router.get("/getuser/:id" ,verifyTokenAndAdmin,UserController.getUser)
router.get("/update/:id" ,verifyTokenAndAdmin,UserController.update)
router.get("/deleteusers/:id" ,verifyTokenAndAuthorization,UserController.deleteuser)
   
module.exports=router  