const express = require('express');
const userRoutter = express();
const bodyParser=require('body-parser');
userRoutter.use(bodyParser.json());
userRoutter.use(bodyParser.urlencoded({extended:true}));
userRoutter.set('view engine','ejs');
userRoutter.set('views','./views');
const userController=require('../controllers/userController')
// import userController from '../controllers/userController'
const auth_middleware=require('../middlewares/authenticateMiddleware')



const multer=require('multer')
const fs= require('fs')
var storage=multer.diskStorage({
    destination:function(req,file,callback){
        var dir='./uploads';
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        callback(null,dir)

    }
    ,
    filename:function(req,file,callback){
        callback(null,file.originalname)

    }
});

var upload=multer({storage:storage});
// var upload=multer({storage:storage}).array('img',12);



userRoutter.get('/register',auth_middleware.is_logout,userController.index)
userRoutter.post('/register',upload.single('img'),auth_middleware.is_logout,userController.register)
userRoutter.get('/verify/email/:id',auth_middleware.is_logout,userController.is_verified)
userRoutter.get('/login',auth_middleware.is_logout,userController.login)
userRoutter.post('/login',auth_middleware.is_logout,userController.login_check)
userRoutter.get('/logout',auth_middleware.is_login,userController.logout)
userRoutter.get('/forgot-password',auth_middleware.is_logout,userController.forgot_password)
userRoutter.post('/forgot-password',auth_middleware.is_logout,userController.forgot_password_submit)
userRoutter.get('/User-Dashboard',auth_middleware.is_login,userController.dashboard)
userRoutter.get('/users',auth_middleware.is_login,userController.all_users)
userRoutter.get('/user/status/:id',auth_middleware.is_login,userController.user_status)
userRoutter.get('/user/edit/:id',auth_middleware.is_login,userController.user_edit)
userRoutter.post('/user/edit/:id',auth_middleware.is_login,userController.user_update)
userRoutter.get('/user/delete/:id',auth_middleware.is_login,userController.user_delete)
userRoutter.get('/profile',auth_middleware.is_login,userController.profile)
userRoutter.get('/change-password',auth_middleware.is_login,userController.change_password)
userRoutter.post('/change-password',auth_middleware.is_login,userController.change_password_change)

module.exports=userRoutter