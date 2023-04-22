const mongoose= require('mongoose')
const salaryPricingModel= require('../../models/PricingModels/salaryPricingModel')
const res= require('express/lib/response')
const index  =async(req,res)=>{
    try{
        context={}
        return res.render('pricing/SalaryPricing/salaryPricing')
    }catch(error)
    {
        return res.send(error.message)
    }
}
module.exports={
    index,
}