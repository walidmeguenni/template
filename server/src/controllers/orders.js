const Order = require("../models/order");
const mongoose = require("mongoose");

exports.GetAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.userId });
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.PostOrders = async (req, res, next) => {
  try {
    if (!req.userId)
      return res.status(406).json({ massege: "Unauthenticated" });
    const dateObj = new Date();
    const newdate =
      dateObj.getUTCFullYear() +
      "-" +
      (dateObj.getUTCMonth() + 1) +
      "-" +
      dateObj.getUTCDate();
    const { name, products, totaleprice } = req.body.data;
    console.log(req.body);
    const orders = new Order({
      name,
      products,
      totaleprice,
      joined: newdate,
      user: req.userId,
    });

    await orders.save();
    return res.status(201).json(orders);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
};
exports.GetOrder = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
    const orders = await Order.findById(id);
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};

exports.UpdateOrder = async (req, res, next) => {
  const { id } = req.params;
  const { name, totaleprice, products } = req.body.data;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Order with id: ${id}`);
  console.log(req.body);
  const Orders = { name, totaleprice, products, _id: id };
  const orders = await Order.findByIdAndUpdate({ _id: id }, Orders, {
    new: true,
  });

  res.json(orders);
};

exports.DeleteOrder = async (req, res, next) => {
  try {
    if (!req.userId)
      return res.status(406).json({ massege: "Unauthenticated" });
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No post with id: ${id}`);

    await Order.findByIdAndRemove({ _id: _id });
    res.json({ message: "Order deleted successfully." });
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteAllOrder = async (req, res, next) => {
  try {
    await Order.findOne({ _id: req.params.id });
    return res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    return res.status(500).json({ massege: "Something went wrong" });
  }
};
