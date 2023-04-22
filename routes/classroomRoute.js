const express = require('express')
const classroomRouter=express()
const auth_middleware= require('../middlewares/authenticateMiddleware')
const classroomController= require('../controllers/classroomController')
const bodyParser = require('body-parser')
classroomRouter.use(bodyParser.json())
classroomRouter.use(bodyParser.urlencoded({extended:true}))
classroomRouter.set('view engine','ejs')
classroomRouter.set('views','./views')

classroomRouter.get('',auth_middleware.is_login,classroomController.index)

module.exports= classroomRouter