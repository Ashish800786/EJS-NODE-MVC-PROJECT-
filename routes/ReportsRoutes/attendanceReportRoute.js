const express= require('express')
const attendanceReportRouter=express()
const attendanceController=require('../../controllers/ReportsControllers/attendanceReportController')
const bodyParser=require('body-parser')
const auth_middleware= require('../../middlewares/authenticateMiddleware')
attendanceReportRouter.use(bodyParser.json())
attendanceReportRouter.use(bodyParser.urlencoded({extended:true}))
attendanceReportRouter.set('view engine','ejs')
attendanceReportRouter.set('views','./views')

attendanceReportRouter.get('',auth_middleware.is_login,attendanceController.index)

module.exports=attendanceReportRouter