const mongoose = require('mongoose')
const student = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    dob:{
        type:Number,
        required:false
    }
})

const Student= mongoose.model('student',student)
module.exports=Student