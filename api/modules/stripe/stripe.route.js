const { auth, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../../meddilewear/verifyTokenandauth');
const { Payment } = require('./stripe.controller/stripe.controller');
 const router = require('express').Router();

router.post("/Payment" ,Payment)
 
module.exports=router  