import mongoose from "mongoose";
const urlschema = new mongoose.Schema({
   orignalurl:{
    type:String,
    required:true
   },
   shortcode:{
     type:String,
     required:true,
     unique:true
   },
   createdat:{
    type:Date,
    default:Date.now
   }
});

const Url = mongoose.model('Url',urlschema);
export default Url;