const mongoose = require('mongoose')
const subjectModel= require('../models/subjectModel')
const res = require('express/lib/response')
const index=async(req,res)=>{
    try{
        context={
        }
        return res.render('masters/Subjects/subjects',context)
    }catch(error)
    {
        return res.send(error.message)
    }
}

module.exports={
    index,
}