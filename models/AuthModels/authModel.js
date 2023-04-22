const mongoose = require('mongoose')
const auth=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
      type:String,
      required:true
    },
    is_varified:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false
    }
});

const Auth = mongoose.model('Auth',auth)
module.exports=Auth;