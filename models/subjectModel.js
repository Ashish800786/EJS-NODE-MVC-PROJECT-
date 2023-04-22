const mongoose = require('mongoose')
const subject=mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
})

const Subject = mongoose.model('subject',subject)
module.exports= Subject