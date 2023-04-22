const mongoose = require('mongoose')
const classroomModel= require('../models/classroomModel')
const res= require('express/lib/response')
const index=async( req,res)=>{
    try{
        context={}
        return res.render('masters/Classrooms/classrooms')
    }catch(error)
    {
        return res.send(error.message)
    }

}

module.exports={
    index,
}