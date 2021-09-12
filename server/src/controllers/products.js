const Product = require("../models/product");
const mongoose = require("mongoose");

const fs = require("fs");

exports.GetAllProducts = async (req, res, next) => {
  if (!req.userId)
      return res.status(406).json({ massege: "Unauthenticated" });
    const products = await Product.find({ user: req.userId });
    return res.status(200).json(products);
};

exports.PostProducts = async (req, res, next) => {
  if (!req.userId) return res.status(406).json({ massege: "Unauthenticated" });
  const dateObj = new Date();
  const newdate = dateObj.getUTCFullYear() +"-" +(dateObj.getUTCMonth() + 1) + "-" +dateObj.getUTCDate();
  const { name, price, quantity, status } = req.body;
  const products = new Product({name,price,quantity,status,productImage: req.file.path,joined: newdate, user: req.userId, });
      await products.save();
    res.status(201).json(products);
};
exports.UpdateProduct = async (req, res, next) => {
  if (!req.userId) return res.status(406).json({ massege: "Unauthenticated" });
  
  const { id } = req.params;
  const { name, price, quantity, status } = req.body.data;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
  
  const product ={name,price,quantity,status,_id: id};
  
  const products= await Product.findByIdAndUpdate({ _id: id }, product, { new: true });
  
  res.json(products);
};

exports.DeleteProduct = async (req, res, next) => {
    if (!req.userId)
      return res.status(406).json({ massege: "Unauthenticated" });
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No post with id: ${_id}`);
   
      const curenntpath = await Product.findById(_id);
      const path = curenntpath.productImage;
      fs.unlink(path, async () => {
        await Product.findByIdAndRemove({ _id: _id });
        res.json({ message: "product deleted successfully." });
      })
};
exports.UpadteProductImage = async (req, res, next) => {
  if (!req.userId)
      return res.status(406).json({ massege: "Unauthenticated" });
  const { id } = req.params;
  const curenntpath = await Product.findById(id);
  const path = curenntpath.productImage;
  fs.unlink(path, async () => {
    const Products = { productImage: req.file.path, _id: id };
    const products = await Product.findByIdAndUpdate({ _id: id }, Products, {new: true});
    res.json(products);
  });
};
exports.DeleteAllProduct = async (req, res, next) => {
  try {
    await Product.findOne({ _id: req.params.id });
    return res.status(200).json({ message: "product deleted" });
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};