const mongoose= require('mongoose')
const feePricing= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
})

const FeePricing = mongoose.model('feePricing',feePricing)
module.exports=FeePricing