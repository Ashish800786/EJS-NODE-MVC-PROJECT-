const mongoose = require('mongoose')
const teacher= mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },

});

const Teacher=mongoose.model('teacher',teacher)
module.exports=Teacher