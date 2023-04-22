const mongoose= require('mongoose')
const section = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const Section = mongoose.model('section',section)
module.exports=Section