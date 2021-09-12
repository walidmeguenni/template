const Employee = require("../models/employee");
const mongoose = require("mongoose");
const fs = require('fs');
exports.GetAllemployees = async (req, res, next) => {
  try {
    const employees= await Employee.find({user:req.userId});
    return res.status(200).json(employees)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.Postemployees = async (req, res, next) => {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
  const dateObj = new Date();
  const newdate = dateObj.getUTCFullYear() + "-" +(dateObj.getUTCMonth() + 1)+ "-" + dateObj.getUTCDate();
  const { fullname,dateNaissance, phone,address,gender,salary,role} = req.body;
  const employees = new Employee({fullname, dateNaissance, phone,address,gender,salary,role,EmployeeImage:req.file.path,joined:newdate ,user:req.userId});
  try {  
  await employees.save();
  res.status(201).json(employees)
 } catch (error) {
   console.log(error)
  res.status(409).json({ message: error});
}
};
exports.Getemployee = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
     const employees= await Employee.findById(id);
     return res.status(200).json(employees)
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.Updateemployee = async (req, res, next) => {
  
  const { id } = req.params;
  const { fullname, age, dateNaissance, phone,address,gender,salary,role} = req.body.data;
  
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No employee with id: ${id}`);
  
  const Employees = { fullname, age, dateNaissance, phone,address,gender,salary,role,_id:id};
  const employees = await Employee.findByIdAndUpdate({_id : id}, Employees, { new: true });

  res.json(employees);
};

exports.UpadteEmployeeImage = async (req, res, next) => {
  if (!req.userId)
      return res.status(406).json({ massege: "Unauthenticated" });
  const { id } = req.params;
  const curenntpath = await Employee.findById(id);
  const path = curenntpath.EmployeeImage;
  fs.unlink(path, async () => {
    const Employees = { EmployeeImage: req.file.path, _id: id };
    const employees = await Employee.findByIdAndUpdate({ _id: id }, Employees, {new: true});
    res.json(employees);
  });
};

exports.Deleteemployee = async (req, res, next) => {
   try {
  if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
     const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

    await  Employee.findByIdAndRemove({ _id: _id })
    res.json({ message: "employee deleted successfully." });
   } catch (error) {
     console.log(error)
   } 

};

exports.DeleteAllemployee=async(req, res, next) =>{
    try {
      await Employee.findOne({ _id: req.params.id });
      return res.status(200).json({ message: "employee deleted" });
    } catch (error) {
      return res.status(500).json({ massege: "Something went wrong" });
    }
}