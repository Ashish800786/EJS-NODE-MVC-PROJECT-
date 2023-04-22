const mongoose=require('mongoose')
const designation=mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
})

const Designation=mongoose.model('designation',designation)
module.exports=Designation