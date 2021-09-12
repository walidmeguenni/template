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
  products: {
    type: String,
    default: 1,
  },
  totaleprice:{
    type:Number,
    required: true,
  },
  joined: {
    type: String,
  },
});
module.exports = mongoose.model('orders', orderSchema);
