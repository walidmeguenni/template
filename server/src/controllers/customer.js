const Customer = require("../models/customer");
const mongoose = require("mongoose");

exports.GetAllcustomers = async (req, res, next) => {
  try {
    const customers= await Customer.find({user:req.userId});
    return res.status(200).json(customers)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.Postcustomers = async (req, res, next) => {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
  const dateObj = new Date();
  const newdate = dateObj.getUTCFullYear() + "-" +(dateObj.getUTCMonth() + 1)+ "-" + dateObj.getUTCDate();

  const { fullname, age,email, phone,address,gender} = req.body.data;
  const customers = new Customer({ fullname, age,email,phone,address,gender,joined:newdate ,user:req.userId});
  try {  
  await customers.save();
  res.status(201).json(customers)
 } catch (error) {
   console.log(error)
  res.status(409).json({ message: error});
}
};
exports.Getcustomer = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
     const customers= await Customer.findById(id);
     return res.status(200).json(customers)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.Updatecustomer = async (req, res, next) => {
  const { id } = req.params;
  const { fullname, age,email, phone,address,gender} = req.body.data;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No customer with id: ${id}`);

    const customers = new Customer({ fullname, age,email,phone,address,gender,joined:newdate ,_id:id});
  await Customer.findByIdAndUpdate({_id : id}, customers, { new: true });

  res.json(customers);
};

exports.Deletecustomer = async (req, res, next) => {
   try {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
     const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

    await  Customer.findByIdAndRemove({ _id: _id })
    res.json({ message: "customer deleted successfully." });
   } catch (error) {
     console.log(error)
   } 

};

exports.DeleteAllcustomer=async(req, res, next) =>{
    try {
      await Customer.findOne({ _id: req.params.id });
      return res.status(200).json({ message: "customer deleted" });
    } catch (error) {
      return res.status(500).json({ massege: "Something went wrong" });
    }
}