const mongoose=require('mongoose')
const user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profile_img:{
        type:String,
        default:null
    },
    is_admin:{
        type:Number,
        required:false,
        default:0
    },
    is_varified:{
        type:Number,
        required:false,
        default:0

    },
    status:{
        type:Number,
        required:true,
        default:1

    },
    address:{
        type:String,
        default:null

    },
});
const User=mongoose.model('user',user)
module.exports=User