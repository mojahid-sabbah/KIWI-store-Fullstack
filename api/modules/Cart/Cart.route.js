const { auth, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('../../meddilewear/verifyTokenandauth');
 const CartController = require('./Cart.controller/Cart.cotroller');
const router = require('express').Router();
 
router.post("/addCart" ,auth(),CartController.addCart)
router.put("/updateCart/:id" ,verifyTokenAndAuthorization,CartController.updateCart)
router.delete("/deleteCart/:id" ,verifyTokenAndAuthorization,CartController.deleteCart)
router.get("/findcart/userId" ,verifyTokenAndAuthorization,CartController.getCart)
router.get("/getallcarts" ,verifyTokenAndAdmin,CartController.getAllCart)

 
module.exports=router 