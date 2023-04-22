const mongoose= require('mongoose')
const schoolModel= require('../models/schoolModel')
const res = require('express/lib/response')
const index=async(req,res)=>{
    try{
     context={
     }
     return res.render('masters/Schools/schools',context)
    }catch(error)
    {
        return res.send(error.message)
    }
}

module.exports={
    index,
}