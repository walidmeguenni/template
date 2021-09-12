const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  imageUrl: {
    type: String,
    default:
      "uploads\\2021-08-30T19-22-31.776Z29213195-male-silhouette-avatar-profile-picture.jpg",
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

    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmtoken: {
    type: String,
  },
  canChange: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "members",
  },
  active:{
    type:Boolean,
    default:false,
  },
  password: { type: String },
});

module.exports = mongoose.model("users", userSchema);
