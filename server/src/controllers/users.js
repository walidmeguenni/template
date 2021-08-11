const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
exports.CreateUser = async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const isEmailExistng = await User.findOne({ email });

    if (isEmailExistng)
      return res
        .status(406)
        .json({ massege: "This email is already registered" });

    if (confirmPassword !== password)
      return res.status(404).json({ massege: "Passwords don't match" });

    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashPassword,
      name: `${firstName}${lastName}`,
    });
    const result = await user.save();
    const token = jwt.sign(
      {
        email: result.email,
        userId: result._id,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(201).json({
      token: token,
      result: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.LOGNIN = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isEmailExistng = await User.findOne({ email });

    if (!isEmailExistng)
      return res.status(202).json({ massege: "Email doesn't exist" });
    const isPassword = await bcrypt.compare(password, isEmailExistng.password);
    if (!isPassword)
      return res.status(202).json({ massege: "password doesn't correct" });
    const token = jwt.sign(
      {
        email: isEmailExistng.email,
        userId: isEmailExistng._id,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    console.log(isEmailExistng);
    return res.status(201).json({
      token: token,
      result: isEmailExistng,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
exports.GetAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};
exports.GetUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const users = await User.findById(id);
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.UpdateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, age, email, address, gender } = req.body.data;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  const Users = { name, age, email, address, gender, _id: id };

  await User.findByIdAndUpdate({ _id: id }, Users, { new: true });
  const users = await User.findById(id);
  res.json(users);
};

exports.UpdateImage = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);
  const Users = { imageUrl: req.file.path, _id: id };

  await User.findByIdAndUpdate({ _id: id }, Users, { new: true });
  const users = await User.findById(id);
  res.json(users);
};
exports.UpdatePassword = async (req, res, next) => {
  const id = req.params.id;
 
  const { newPassword, password, confirmPassword } = req.body.data;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

  if (confirmPassword !== password) return res.status(404).json({ massege: "Passwords don't match" });

  const isExistng = await User.findOne({ _id: id });
  const isPassword = await bcrypt.compare(password, isExistng.password);

  if (!isPassword) return res.status(404).json({ massege: "password doesn't correct" });


  const hashPassword = await bcrypt.hash(newPassword, 12);
  const users = { password: hashPassword };

  await User.findByIdAndUpdate({ _id: id }, users, { new: true });

   const test =await User.findOne({ _id: id });

  res.status(201).json({ massege: "password updated" });
};
exports.deleteUser = async (req, res, next) => {
  try {try {
    if(!req.userId) return res.status(406).json({massege:"Unauthenticated"})
       const _id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No member with id: ${id}`);
      await  User.findByIdAndRemove({ _id: _id })
      res.json({ message: "member deleted successfully." });
     } catch (error) {
       console.log(error)
     } 
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};
