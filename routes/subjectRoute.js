const express= require('express')
const subjectRouter=express()
const subjectController=require('../controllers/subjectController')
const auth_middleware= require('../middlewares/authenticateMiddleware')
const bodyParser= require('body-parser')
subjectRouter.use(bodyParser.json())
subjectRouter.use(bodyParser.urlencoded({extended:true}))
subjectRouter.set('view engine','ejs')
subjectRouter.set('views','./views')

subjectRouter.get('',auth_middleware.is_login,subjectController.index)

module.exports=subjectRouter
