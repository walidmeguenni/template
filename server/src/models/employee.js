const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema({
  user : {
    type:mongoose.Schema.Types.ObjectId,
    ref :  'users' ,
  },
  fullname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  dateNaissance:{
     type:String
  }, 
  phone: {
   type:Number
  },
  address:{
  type:String
    },
  gender:{
  value:String,
  },
  EmployeeImage: {
    type: String,
  },
  salary: {
    type: Number,
  },
  joined: {
    type: String,
  },
  role: {
    type: String,
  }
});
module.exports = mongoose.model('Employees', EmployeeSchema);

