const express = require('express')
const sectionRouter=express()
const bodyParser = require('body-parser')
sectionRouter.use(bodyParser.json())
sectionRouter.use(bodyParser.urlencoded({extended:true}))
const sectionController= require('../controllers/sectionConroller')
const auth_middleware= require('../middlewares/authenticateMiddleware')
sectionRouter.set('view engine','ejs')
sectionRouter.set('views','./views')


sectionRouter.get('',auth_middleware.is_login,sectionController.index)
module.exports= sectionRouter