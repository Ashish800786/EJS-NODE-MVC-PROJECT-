const mongoose = require('mongoose')
const attendanceReport=mongoose.Schema({
    name:{
        required:true,
        type:String
    },
});

const AttendanceReport=mongoose.model('attendanceReport',attendanceReport)
module.exports=AttendanceReport