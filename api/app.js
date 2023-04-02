require('dotenv').config()
const express = require('express')
const { connectDB } = require('./DB/connection')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

app.use(express.json())

const indexRouter = require('./modules/index.route')
const userUrl = process.env.BASEURL;
connectDB(); 
app.use(`${userUrl}/cart` ,    indexRouter.cartRouter)
app.use(`${userUrl}/product` , indexRouter.productRouter)
app.use(`${userUrl}/user` ,    indexRouter.userRouter)
app.use(`${userUrl}/order` ,   indexRouter.orderRouter)
app.use(`${userUrl}/auth` ,    indexRouter.authRouter)
app.use(`${userUrl}/checkout` ,    indexRouter.stripeRouter)
app.get('*', (req, res) => res.send('Not Found !'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))