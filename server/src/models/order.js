const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
user: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  name:{
    type:String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  joined: {
    type: String,
  },
});
module.exports = mongoose.model('orders', orderSchema);
