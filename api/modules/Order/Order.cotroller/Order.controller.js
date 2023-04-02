const { OrderModel } = require('../../../DB//models/order.models');


const addnewsOrder = async (req, res) => {
         try {
            const newOrder = new OrderModel({
                userId: req.body.userId,
                products: req.body.products,
                amount: req.body.amount,
                address: req.body.address,
                status: req.body.status
            });
            const savedOrder = await newOrder.save();
            res.json({ message: "Order added successfully", savedOrder });
        } catch (error) {
            res.json({ message: "Error adding order", error });
        }
    };
    

const addOrder = async (req, res) => {
    try {
        const existingOrder = await OrderModel.findOne({ userId: req.body.userId });
        if (existingOrder) {
            const updatedOrder = await OrderModel.findByIdAndUpdate(existingOrder._id, {
                $push: { products: req.body.products },
                $set: { amount: req.body.amount, address: req.body.address, status: req.body.status }
            }, { new: true });
            res.json({ message: "Order updated successfully", updatedOrder });
        } else {
            const newOrder = new OrderModel(req.body);
            const savedOrder = await newOrder.save();
            res.json({ message: "Order added successfully", savedOrder });
        }
    } catch (error) {
        res.json({ message: "Error adding/updating order", error });
    }
};



const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { $set } = req.body;
    const Order = await OrderModel.findOneAndUpdate({ _id: id }, {$set}, { new: true })
    res.json({ message: "success", Order })
}
const deleteOrder = async (req, res) => {
    const { id } = req.params;
    const Order = await OrderModel.findOneAndDelete({ _id: id })
    res.json({ message: "success", Order })
}
const getOrder = async (req, res) => {
    const { userId } = req.params;
    const Orders = await OrderModel.find({ userId: userId })
    res.json({ message: "success", Orders })

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

const getAllOrder = async (req, res) => {
    try {
        
        const Order = await OrderModel.find({}).sort({ createdAt: -1 }).limit(10);
        return res.json({ message: "success", Order })
    } catch (error) {
        return res.status(500).json({ message: "catch", error })
        
    }

  };
  

// GET MONTHLY INCOME

 
  const inCome = async (req, res) => {

  const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));
    try {
        const income = await OrderModel.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            { $project: {
                 month: { $month: "$createdAt" },
                sales: "$amount"
                } },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                }
            }
        ]);
        res.status(500).json({ message: "success", income })

    } catch (error) {

        res.status(500).json({ message: "catch", error })
    }
}
module.exports = { addOrder, updateOrder, getOrder, getAllOrder, deleteOrder ,inCome ,addnewsOrder}