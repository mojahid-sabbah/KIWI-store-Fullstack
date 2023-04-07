const { CartModel } = require('../../../DB/models/cart.models');

const addCart = async (req, res) => {
    try {

         const newCart = new CartModel(req.body)
        const savedCart = await newCart.save();  // this add to DB
        res.json({ message: "success", savedCart })

    } catch (error) {
        res.json({ message: "catch error", error })
    }
}

const updateCart = async (req, res) => {
    const { id } = req.params;
    const { $set } = req.body;
    const Cart = await CartModel.findOneAndUpdate({ _id: id }, {$set}, { new: true })
    res.json({ message: "success", Cart })
}
const deleteCart = async (req, res) => {
    const { id } = req.params;
    const Cart = await CartModel.findOneAndDelete({ _id: id })
    res.json({ message: "success", Cart })
}
const getCart = async (req, res) => {
    const { userId } = req.params;
    const Cart = await CartModel.findOne({ userId: userId })
    res.json({ message: "success", Cart })

}
/* const getAllProducts = async (req, res) => {
    const Qnew = req.query.new;
    const Qcategory = req.query.category;
    try {
        let products;
        if (Qnew) {
            products = await ProductModel.find().sort({ createdAt: -1 }).limit(5)
        } else if (Qcategory) {
            products = await ProductModel.find({categories: { $in: [Qcategory], }})
        } else {
            products = await ProductModel.find();
        }

        res.json({ message: "success", products })

    } catch (error) {

        res.json({ message: "catch", error })
    }

 
} */

const getAllCart = async (req, res) => {
  const Cart = await CartModel.find()
  res.json({ message: "success", Cart })

  };
  


module.exports = { addCart, updateCart, getCart, getAllCart, deleteCart }