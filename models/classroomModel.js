const mongoose= require('mongoose')
const classroom=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const ClassRoom= mongoose.model('classroom',classroom)
module.exports=ClassRoom