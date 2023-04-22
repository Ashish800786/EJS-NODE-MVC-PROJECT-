const mongoose = require('mongoose')
const testReport = mongoose.Schema({
    name:{
        required:true,
        type:String
    }
});

const TestReport= mongoose.model('testReport',testReport)
module.exports=TestReport