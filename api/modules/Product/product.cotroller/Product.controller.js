const { ProductModel } = require('../../../DB/models/product.models');

const addProduct = async (req, res) => {
    try {

        const { title, desc, img, price, categories, size, color } = req.body;
        const newProduct = new ProductModel({ title, desc, img, price, categories, size, color })
        const savedProduct = await newProduct.save();  // this add to DB
        res.json({ message: "success", savedProduct })

    } catch (error) {
        res.json({ message: "catch error", error })
    }
}

const updateproduct = async (req, res) => {
    const { id } = req.params;
    const { title, desc, img, price, categories, size, color } = req.body;
    const Product = await ProductModel.findOneAndUpdate({ _id: id }, { title, desc, img, price, categories, size, color }, { new: true })
    res.json({ message: "success", Product })
}
const getProduct = async (req, res) => {
   try {
    
       const { id } = req.params;
       const Product = await ProductModel.findById({ _id: id })
       res.json(Product )
    
   } catch (error) {
    res.json(error )
    
   }
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

const getAllProducts = async (req, res) => {
    const Qnew = req.query.new;
    const Qcategory = req.query.category;
    try {
      let products;
      if (Qnew) {
        products = await ProductModel.find({}).sort({ createdAt: -1 }).limit(5);
      } else if (Qcategory) {
        products = await ProductModel.find({ categories: { $in: [Qcategory] } } );
      } else {
        products = await ProductModel.find({});
      }
      res.json(products);
    } catch (error) {
      res.json({ message: "catch", error });
    }
  };
  
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const Product = await ProductModel.findOneAndDelete({ _id: id })
    res.json({ message: "success", Product })
}

module.exports = { addProduct, updateproduct, getProduct, getAllProducts, deleteProduct }