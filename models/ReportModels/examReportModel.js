const mongoose= require('mongoose')
const examReport= mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const ExamReport= mongoose.model('examReport',examReport)
module.exports=ExamReport