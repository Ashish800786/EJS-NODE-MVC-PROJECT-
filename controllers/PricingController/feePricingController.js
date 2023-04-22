const mongoose= require('mongoose')
const feePricingModel = require('../../models/PricingModels/feePricingModel')
const res= require('express/lib/response')
const index= async(req ,res)=>{
    try{
        context={}
        return res.render('pricing/FeePricing/feePricing')
    }catch(error)
    {
        return res.send(error.message)
    }
}

module.exports={
    index,
}