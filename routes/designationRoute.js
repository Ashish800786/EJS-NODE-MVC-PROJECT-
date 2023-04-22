const express=require('express')
const designationRoute=express();
const designationController=require('../controllers/designationController')
const bodyParser= require('body-parser')
const auth_middleware= require('../middlewares/authenticateMiddleware')
designationRoute.use(bodyParser.json())
designationRoute.use(bodyParser.urlencoded({extended:true}))
designationRoute.set('view engine','ejs')
designationRoute.set('views','./views')

designationRoute.get('',auth_middleware.is_login,designationController.index)
module.exports=designationRoute
