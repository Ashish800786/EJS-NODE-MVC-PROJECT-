const mongoose= require('mongoose')
const studentModel= require('../models/studentmodel')
const res = require('express/lib/response')

const index=async(req,res)=>{
    try{
        context={}
        // return res.render('masters/Students/students',context)
        return res.render('masters/Students/students',context)
        // return res.render('masters/Teachers/teachers',context)

    }catch(error)
    {
        return res.send(error.message)

    }
}

module.exports={
    index,
}
