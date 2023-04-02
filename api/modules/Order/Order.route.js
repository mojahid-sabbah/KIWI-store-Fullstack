const { auth, verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('../../meddilewear/verifyTokenandauth');
 const OrderController = require('./Order.cotroller/Order.controller');
const router = require('express').Router();
 
router.post("/addOrder" ,auth(),OrderController.addOrder)
router.post("/addnewsOrder" ,auth(),OrderController.addnewsOrder)
router.put("/updateOrder/:id" ,verifyTokenAndAdmin,OrderController.updateOrder)
router.delete("/deleteOrder/:id" ,verifyTokenAndAdmin,OrderController.deleteOrder)
router.get("/income" ,verifyTokenAndAdmin,OrderController.inCome)
router.get("/findOrder/userId" ,verifyTokenAndAuthorization,OrderController.getOrder)
router.get("/getallOrders" ,verifyTokenAndAdmin,OrderController.getAllOrder)

 
module.exports=router   

/* 
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
*/