const authRouter = require('./auth/auth.route')
const productRouter = require('./Product/Product.route')
const userRouter = require('./Users/User.route')
const orderRouter = require('./Order/Order.route')
const cartRouter = require('./Cart/Cart.route')
const stripeRouter = require('./stripe/stripe.route')

module.exports={userRouter,productRouter ,authRouter ,orderRouter ,cartRouter ,stripeRouter} 