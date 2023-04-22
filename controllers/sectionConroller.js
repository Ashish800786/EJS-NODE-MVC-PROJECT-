const mongoose= require('mongoose')
const sectionModel= require('../models/sectionModel')
const res= require('express/lib/response')
const index=async(req,res)=>{
    try{
        context={}
        return res.render('masters/Sections/sections')
    }catch(error)
    {
      return res.send(error.message)
    }

}

module.exports={
    index,
}