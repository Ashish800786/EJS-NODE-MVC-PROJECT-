const express= require('express')
const studentRouter=express();
const bodyParser= require('body-parser')
const studentControoler = require('../controllers/studentController')
const auth_middleware=require('../middlewares/authenticateMiddleware')
studentRouter.use(bodyParser.json())
studentRouter.use(bodyParser.urlencoded({extended:true}))
studentRouter.set('view engine','ejs')
studentRouter.set('views','./views')

studentRouter.get('',auth_middleware.is_login,studentControoler.index)

module.exports=studentRouter