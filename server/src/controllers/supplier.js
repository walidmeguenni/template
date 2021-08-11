const Supplier = require("../models/supplier");
const mongoose = require("mongoose");

exports.GetAllsuppliers = async (req, res, next) => {
  try {
    const suppliers= await Supplier.find({user:req.userId});
    return res.status(200).json(suppliers)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.Postsuppliers = async (req, res, next) => {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
  const dateObj = new Date();
  const newdate = dateObj.getUTCFullYear() + "-" +(dateObj.getUTCMonth() + 1)+ "-" + dateObj.getUTCDate();
  const { fullname, age, email,phone,address,gender,company} = req.body.data;
  const suppliers = new Supplier({ fullname, age, email,phone,address,gender,company,joined:newdate ,user:req.userId});
  try {  
  await suppliers.save();
  res.status(201).json(suppliers)
 } catch (error) {
   console.log(error)
  res.status(409).json({ message: error});
}
};
exports.Getsupplier = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
     const suppliers= await Supplier.findById(id);
     return res.status(200).json(suppliers)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.Updatesupplier = async (req, res, next) => {
  const { id } = req.params;
  const { fullname, age, email,phone,address,gender,company} = req.body.data;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No supplier with id: ${id}`);

  const suppliers = {  fullname, age, email,phone,address,gender,company };

  await Supplier.findByIdAndUpdate({_id : id}, suppliers, { new: true });

  res.json(suppliers);
};

exports.Deletesupplier = async (req, res, next) => {
   try {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
     const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

    await  Supplier.findByIdAndRemove({ _id: _id })
    res.json({ message: "supplier deleted successfully." });
   } catch (error) {
     console.log(error)
   } 

};

exports.DeleteAllsupplier=async(req, res, next) =>{
    try {
      await Supplier.findOne({ _id: req.params.id });
      return res.status(200).json({ message: "supplier deleted" });
    } catch (error) {
      return res.status(500).json({ massege: "Something went wrong" });
    }
}