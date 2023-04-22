const mongoose = require('mongoose')
const attendance=mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
})

const Attendance=mongoose.model('attendance',attendance)
module.exports=Attendance