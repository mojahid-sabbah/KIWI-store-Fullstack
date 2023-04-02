const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const connectDB =async ()=>{
    const nameDB = 'KiwiStore'
    return await mongoose.connect(`mongodb://127.0.0.1:27017/${nameDB}`).then(
        res=>{
            console.log("connected DB") 
        }).catch(err=>{
            console.log(`failconnected ${err}`)
        }) 



}
module.exports={connectDB}