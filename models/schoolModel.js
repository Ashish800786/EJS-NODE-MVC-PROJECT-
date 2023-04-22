const mongoose= require('mongoose')
const school=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const School=mongoose.model('school',school)
module.exports=School