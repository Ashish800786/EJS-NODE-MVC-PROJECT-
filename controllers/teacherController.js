const mongoose = require('mongoose')
const teacherModel=require('../models/teacherModel')
const res=require('express/lib/response')

const index=async(req,res)=>{
    try{
        context={
        }
        return res.render('masters/Teachers/teachers',context)
        
    }
    catch(error)
    {
        res.send(error.message)

    }

}

module.exports={
    index,
}