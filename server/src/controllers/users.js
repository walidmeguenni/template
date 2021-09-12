const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { main } = require("../config/mailer");
const emailValidator = require("deep-email-validator");

const fs = require("fs");
const defaultImage =
  "uploads\\2021-08-30T19-22-31.776Z29213195-male-silhouette-avatar-profile-picture.jpg";

async function isEmailValid(email) {
  return emailValidator.validate(email);
}
exports.CreateUser = async (req, res, next) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    address,
    email,
    password,
    confirmPassword,
  } = req.body;
  try {
    const { valid, reason, validators } = await isEmailValid(email);
    if (!valid) {
      return res.status(202).send({
        massege: "Please provide a valid email address.",
        // reason: validators[reason].reason
      });
    }

    const isEmailExistng = await User.findOne({ email });

    if (isEmailExistng)
      return res
        .status(202)
        .json({ massege: "This email is already registered" });

    if (confirmPassword !== password)
      return res.status(202).json({ massege: "Passwords don't match" });

    const hashPassword = await bcrypt.hash(password, 12);
    const dateObj = new Date();
    const newdate =
      dateObj.getUTCFullYear() +
      "-" +
      (dateObj.getUTCMonth() + 1) +
      "-" +
      dateObj.getUTCDate();

    const token = jwt.sign(
      { email: email, address: address },
      process.env.TOKEN_SECRET
    );
    const user = new User({
      age,
      gender,
      address,
      email,
      password: hashPassword,
      confirmtoken: token,
      name: `${firstName}${lastName}`,
      joined: newdate,
    });
    const result = await user.save((err) => {
      if (err) console.log(err);

      fulname = `${firstName}${lastName}`;
      const stutus = "email";
      main(fulname, email, token, stutus);
      return res.send({
        massege: "User was registered successfully! Please check your email",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ massege: "Something went wrong" });
  }
};
exports.Check = async (req, res, next) => {
  const { email } = req.body;
  const isEmailExistng = await User.findOne({ email });

  if (!isEmailExistng)
    return res.status(202).json({ massege: "Email doesn't exist" });
  const token = jwt.sign(
    {
      email: isEmailExistng.email,
      address: isEmailExistng.address,
      userId: isEmailExistng._id,
    },
    process.env.TOKEN_SECRET
  );
  const id = isEmailExistng._id;
  console.log(id);
  const user = { confirmtoken: token, _id: id };
  const users = await User.findByIdAndUpdate(id, user, { new: true });
  console.log(users);
  const fulname = isEmailExistng.name;
  const stutus = "password";
  main(fulname, email, token, stutus);
  return res
    .status(202)
    .json({ massege: "Please confirm your email to change password" });
};
exports.ForgotPassword = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const user = await User.findById(id);
  console.log(user);
  if (!user) return res.status(202).send({ massege: "ID Not found." });
  if (!user.canChange)
    return res
      .status(404)
      .json({ massege: "Please confirm your email to change password" });

  const { newPassword, confirmPassword } = req.body;

  if (confirmPassword !== newPassword)
    return res.status(404).json({ massege: "Passwords don't match" });

  const hashPassword = await bcrypt.hash(newPassword, 12);
  const users = { password: hashPassword, canChange: false };

  await User.findByIdAndUpdate({ _id: id }, users, { new: true });

  res.status(201).json({ massege: "password updated" });
};
exports.verifyToken = async (req, res, next) => {
  await User.findOne({
    confirmtoken: req.params.token,
  })
    .then((user) => {
      if (!user) {
        return res.status(202).send({ massege: "Token Not valid." });
      }
      user.canChange = true;
      console.log(user.canChange);
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
};
exports.verifyUser = async (req, res, next) => {
  User.findOne({
    confirmtoken: req.params.token,
  })
    .then((user) => {
      if (!user) {
        return res.status(202).send({ massege: "User Not found." });
      }
      user.confirmed = true;
      console.log(user.confirmed);
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
};
exports.LOGNIN = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isEmailExistng = await User.findOne({ email });

    if (!isEmailExistng)
      return res.status(202).json({ massege: "Email doesn't exist" });
    if (!isEmailExistng.confirmed)
      return res
        .status(202)
        .json({ massege: "Please confirm your email to login" });

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
    const user = { active: true, _id: isEmailExistng._id };
    const users = await User.findByIdAndUpdate(
      { _id: isEmailExistng._id },
      user,
      { new: true }
    );
    return res.status(201).json({
      token: token,
      result: users,
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
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
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

  const users = await User.findByIdAndUpdate({ _id: id }, Users, { new: true });
  res.json(users);
};

exports.UpdateImage = async (req, res, next) => {
  if (!req.userId) return res.status(406).json({ massege: "Unauthenticated" });
  const { id } = req.params;
  const curenntpath = await User.findById(id);
  const path = curenntpath.imageUrl;
  if (path === defaultImage) {
    const Users = { imageUrl: req.file.path, _id: id };
    const users = await User.findByIdAndUpdate({ _id: id }, Users, {
      new: true,
    });
    res.json(users);
  } else {
    fs.unlink(path, async () => {
      const Users = { imageUrl: req.file.path, _id: id };
      const users = await User.findByIdAndUpdate({ _id: id }, Users, {
        new: true,
      });
      res.json(users);
    });
  }
};
exports.UpdatePassword = async (req, res, next) => {
  const id = req.params.id;

  const { newPassword, password, confirmPassword } = req.body.data;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  if (confirmPassword !== password)
    return res.status(404).json({ massege: "Passwords don't match" });

  const isExistng = await User.findOne({ _id: id });
  const isPassword = await bcrypt.compare(password, isExistng.password);

  if (!isPassword)
    return res.status(404).json({ massege: "password doesn't correct" });

  const hashPassword = await bcrypt.hash(newPassword, 12);
  const users = { password: hashPassword };

  await User.findByIdAndUpdate({ _id: id }, users, { new: true });

  res.status(201).json({ massege: "password updated" });
};
exports.deleteUser = async (req, res, next) => {
  try {
    try {
      if (!req.userId)
        return res.status(406).json({ massege: "Unauthenticated" });
      const _id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send(`No member with id: ${_id}`);
      const curenntpath = await User.findById(_id);
      const path = curenntpath.imageUrl;
      if (path === defaultImage) {
        await User.findByIdAndRemove({ _id: _id });
        res.json({ message: "member deleted successfully." });
      } else {
        fs.unlink(path, async () => {
          await User.findByIdAndRemove({ _id: _id });
          res.json({ message: "member deleted successfully." });
        });
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.LOGOUT = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No member with id: ${id}`);
    const user = { active: false, _id: id };
     await User.findByIdAndUpdate({ _id: id }, user, {
      new: true,
    });
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
