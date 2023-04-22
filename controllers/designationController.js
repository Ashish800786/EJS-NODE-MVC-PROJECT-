const mongoose = require('mongoose')
const res=require('express/lib/response')
const designationModel= require('../models/designationModel')
const index=async(req,res)=>{
    try{
        context={
        }
        return res.render('masters/Designaions/designation',context)
    }catch(error)
    {
        return res.send(error.message)
    }
}

module.exports={
    index,
}