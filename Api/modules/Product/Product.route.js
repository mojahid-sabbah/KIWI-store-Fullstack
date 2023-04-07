const { auth, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../../meddilewear/verifyTokenandauth');
 const ProductController = require('./product.cotroller/Product.controller');
const router = require('express').Router();
 
router.post("/addProduct" ,verifyTokenAndAdmin,ProductController.addProduct)
router.get("/getAllProducts" ,/* verifyTokenAndAdmin, */ProductController.getAllProducts)
router.get("/getProduct/:id" ,/* verifyTokenAndAdmin, */ProductController.getProduct)

 
module.exports=router 