const Materail = require("../models/materail");
const mongoose = require("mongoose");
const fs = require('fs')
exports.GetAllMaterails = async (req, res, next) => {
  try {
    const materails= await Materail.find({user:req.userId});
    return res.status(200).json(materails)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.PostMaterails = async (req, res, next) => {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
  const dateObj = new Date();
  const newdate = dateObj.getUTCFullYear() + "-" +(dateObj.getUTCMonth() + 1)+ "-" + dateObj.getUTCDate();
  const { name, VIN,type,price } = req.body;
  const materails = new Materail({ name, price, VIN,type ,MaterailImage:req.file.path,joined:newdate ,user:req.userId});
  try {  
  await materails.save();
  res.status(201).json(materails)
 } catch (error) {
   console.log(error)
  res.status(409).json({ message: error});
}
};
exports.GetMaterail = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
     const materails= await Materail.findById(id);
     return res.status(200).json(materails)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.UpdateMaterail = async (req, res, next) => {
  const { id } = req.params;
  const { name, VIN,type,price } = req.body.data;

    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Materail with id: ${id}`);
    const Materails = new Materail({ name, VIN,type,price,_id: id});
   const materails= await Materail.findByIdAndUpdate({_id:id}, Materails, { new: true });
    res.json(materails);
};

exports.UpadteMaterialImage = async (req, res, next) => {
  const { id } = req.params;
  const curenntpath = await Materail.findById(id);
  const path = curenntpath.MaterailImage;
  fs.unlink(path, async () => {
    const Materails = { MaterailImage: req.file.path, _id: id };
    const materails = await Materail.findByIdAndUpdate({ _id: id }, Materails, {new: true});
    res.json(materails);
  });
};


exports.DeleteMaterail = async (req, res, next) => {
   try {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
     const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

    await  Materail.findByIdAndRemove({ _id: _id })
    res.json({ message: "Materail deleted successfully." });
   } catch (error) {
     console.log(error)
   } 

};

exports.DeleteAllMaterail=async(req, res, next) =>{
    try {
      await Materail.findOne({ _id: req.params.id });
      return res.status(200).json({ message: "Materail deleted" });
    } catch (error) {
      return res.status(500).json({ massege: "Something went wrong" });
    }
}