const express= require('express')
const schoolRoute=express();
const schoolController= require('../controllers/schoolController')
const auth_middleware= require('../middlewares/authenticateMiddleware')
const bodyParser= require('body-parser')
schoolRoute.use(bodyParser.json())
schoolRoute.use(bodyParser.urlencoded({extended:true}))
schoolRoute.set('view engine','ejs')
schoolRoute.set('views','./views')
schoolRoute.get('',auth_middleware.is_login,schoolController.index)
module.exports=schoolRoute
