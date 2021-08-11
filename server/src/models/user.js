const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  joined: {
    type: String,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  role: {
    type: String,
    default:"members"
  },
  password: { type: String},
});

module.exports = mongoose.model("users", userSchema);
