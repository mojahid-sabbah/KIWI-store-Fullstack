const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    categories: { type: Array },
    size: {
         type: Array 
    },
    color: { type: Array },
    quantity: Number,
    inStock:{type:Boolean , default:true}

}, { timestamps: true })
const ProductModel = mongoose.model('Product', ProductSchema)
module.exports = { ProductModel }