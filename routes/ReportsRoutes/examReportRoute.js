const express= require('express')
const examReportRouter=express()
const examReportController= require('../../controllers/ReportsControllers/examReportController')
const bodyParser= require('body-parser')
examReportRouter.use(bodyParser.json())
examReportRouter.use(bodyParser.urlencoded({extended:true}))
const auth_middleware= require('../../middlewares/authenticateMiddleware')
examReportRouter.set('view engine','ejs')
examReportRouter.set('views','./views')

examReportRouter.get('',auth_middleware.is_login,examReportController.index)
module.exports=examReportRouter