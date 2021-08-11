const mongoose = require("mongoose");
const SupplierSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  fullname: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  joined: {
    type: String,
  },
  company:{
      type:String
  }
});

module.exports = mongoose.model("suppliers", SupplierSchema);