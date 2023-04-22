const mongoose= require('mongoose')
const salaryPricing=mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
});
const SalaryPricing = mongoose.model('salaryPricing',salaryPricing)
module.exports = SalaryPricing