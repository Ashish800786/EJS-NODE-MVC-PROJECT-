const mongoose= require('mongoose')
const examReportModel=require('../../models/ReportModels/examReportModel')
const res=require('express/lib/response')

const index=async(req,res)=>{
    try{
        context={}
        return res.render('reports/ExamReport/examReport')
    }catch(error)
    {
        return res.send(error.message)
    }
}

module.exports={
    index,
}