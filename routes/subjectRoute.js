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
subjectRouter.post('',auth_middleware.is_login,subjectController.subject_save)
subjectRouter.post('/update',auth_middleware.is_login,subjectController.subject_update)
subjectRouter.get('/status/:id',auth_middleware.is_login,subjectController.subject_status)
subjectRouter.get('/delete/:id',auth_middleware.is_login,subjectController.subject_delete)
subjectRouter.get('/restore/:id',auth_middleware.is_login,subjectController.subject_restore)
subjectRouter.get('/history/:id',auth_middleware.is_login,subjectController.subject_history)

module.exports=subjectRouter
 