const mongoose= require('mongoose')
const attendacneReportModel= require('../../models/ReportModels/attendanceReportModel')
const res= require('express/lib/response')
const index=async(req,res)=>{
    try{
        context={}
      return res.render('reports/AttendanceReport/attendanceReport')
    }catch(error)
    {
        return res.send(error.message)
    }
}


module.exports={
    index,
}