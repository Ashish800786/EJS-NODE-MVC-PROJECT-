const express = require('express')
const teacherRouter=express()
const bodyParser=require('body-parser')
teacherRouter.use(bodyParser.json())
teacherRouter.use(bodyParser.urlencoded({extended:true}))
teacherRouter.set('view engine','ejs')
teacherRouter.set('views','./views')
const teacherController=require('../controllers/teacherController')
const auth_middleware=require('../middlewares/authenticateMiddleware')

teacherRouter.get('',auth_middleware.is_login,teacherController.index)
module.exports=teacherRouter
