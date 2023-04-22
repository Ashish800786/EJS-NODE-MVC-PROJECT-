const mongoose= require('mongoose')
const testReportmodel=require('../../models/ReportModels/testReportModel')
const res= require('express/lib/response')
const index=async(req,res)=>{
    try{
        context={}
        return res.render('reports/TestReport/testReport')
    }catch(error)
    {
        return res.send(error.message)
    }
}

module.exports={
    index,
}