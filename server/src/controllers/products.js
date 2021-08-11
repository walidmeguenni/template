const Product = require("../models/product");
const mongoose = require("mongoose");

exports.GetAllProducts = async (req, res, next) => {
  try {
    const products= await Product.find({user:req.userId});
    console.log(products)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.PostProducts = async (req, res, next) => {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
  const dateObj = new Date();
  const newdate = dateObj.getUTCFullYear() + "-" +(dateObj.getUTCMonth() + 1)+ "-" + dateObj.getUTCDate();
  const { name, price, quantity,status} = req.body;
  const products = new Product({ name, price, quantity,status,productImage:req.file.path,joined:newdate ,user:req.userId});
  try {  
  await products.save();
  res.status(201).json(products)
 } catch (error) {
   console.log(error)
  res.status(409).json({ message: error});
}
};
exports.GetProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
     const products= await Product.findById(id);
     return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.UpdateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, price, quantity, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No product with id: ${id}`);

  const products = { name, price, quantity, productImage:req.file.path, status, _id: id };

  await Product.findByIdAndUpdate({_id : id}, products, { new: true });

  res.json(products);
};

exports.DeleteProduct = async (req, res, next) => {
   try {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
     const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

    await  Product.findByIdAndRemove({ _id: _id })
    res.json({ message: "product deleted successfully." });
   } catch (error) {
     console.log(error)
   } 

};

exports.DeleteAllProduct=async(req, res, next) =>{
    try {
      await Product.findOne({ _id: req.params.id });
      return res.status(200).json({ message: "product deleted" });
    } catch (error) {
      return res.status(500).json({ massege: "Something went wrong" });
    }
}