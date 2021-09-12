const mongoose = require('mongoose');

const MaterailSchema = mongoose.Schema({
user : {
    type:mongoose.Schema.Types.ObjectId,
    ref :  'users' ,
},
name:{
     type:String,
     required:true
 },
VIN:{
     type:Number,
     required:true
},
price:{
     type:Number
},
type:{
     type:String
},
 joined:{
   type:String,
},
 MaterailImage: { type: String,required:true}
});
module.exports = mongoose.model('materails', MaterailSchema);