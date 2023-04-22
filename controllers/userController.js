//const mongoose=require(mongoose);
const res=require('express/lib/response')
const body=require
const userModel=require('../models/userModel')
const bcrypt = require('bcrypt')
const nodemailer=require('nodemailer')
const session = require('express-session')
// const multer= require('multer')
// const fs= require('fs')
// var storage=multer.diskStorage({
//     destination:function(req,file,callback){
//         var dir='./uploads';
//         if(!fs.existsSync(dir)){
//             fs.mkdirSync(dir)
//         }
//         callback(null,dir)

//     }
//     ,
//     filename:function(req,file,callback){
//         callback(null,file.originalname)

//     }
// });

// var upload=multer({storage:storage}).array('img',12);

const security=async(password)=>{
    try{

        const password_hash=await bcrypt.hash(password,10);
        return password_hash;

    }catch(error)
    {
        res.send(error.message)
    }
}
const index=async(req,res)=>{
    try{
        let a='User Registration';
        res.render('user/userRegister',{'data':a,'msg':req.flash('msg'),'err':req.flash('err')});
    }catch(error){
        console.log("getting Error..");
        res.send(error.message)
    } 
}



const image_upploader=async(req,res)=>{
    try{

    }catch(error)
    {

    }

}


const sendVerificationMail=async(req,name,email,user_id)=>{
    try{
        const transpoter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'ashishyadav800786@gmail.com',
                pass:"zebqqkbqrcxccekf"

            },
        })

        const mailOptions={
            from:'ashishyadav800786@gmail.com',
            to:'ashishkingyadav786@gmail.com',
            subject:"For varification mail.",
            // text:"Write Your text here"
            html:'Hello '+name+', <a href="'+req.protocol+"://"+req.headers.host+'/verify/email/'+user_id+'"> Please Click here for varify your email. </a>'
        }

        transpoter.sendMail(mailOptions,function(error,info){
            if(error)
            {
             console.log(error.message)
            }else{
                console.log('Verfication Mial Sent...',info.response)
            }
        })

    }catch(error)
    {
        console.log(error.message)

    }

}

const is_verified=async(req,res)=>{
    try{
     const id=req.params.id
     const user=userModel.findByIdAndUpdate(id,{is_varified:1})
     res.send('Your Email is verified.successfully')

    }catch(error)
    {
        res.send(error.message)
    }

}

const register = async(req,res)=>{
    try{
        const user_data = await userModel.findOne({ email : req.body.email });
        if(user_data)
        {
            req.flash('err','User already exist.');
           return res.redirect('back')

        }
        const mobile_data = await userModel.findOne({ mobile : req.body.mobile });
        if(mobile_data)
        {
            req.flash('err','Mobile number already exist.');
            return res.redirect('back')

        }
        
        if (req.body.password != req.body.c_password)
        {
            req.flash('err','Password and confirm password dit not matched.');
            return  res.redirect('back');
        }else
        {
                const secure_password= await security(req.body.password);
                const user=new userModel({
                    name:req.body.name,
                    email:req.body.email,
                    mobile:req.body.mobile,
                    password:secure_password,
                    // password:req.body.password,
                    is_admin:0,
                    is_varified:0,
                });
                const result=await user.save();

                if(result)
                {
                    sendVerificationMail(req,req.body.name,req.body.email,result._id);
                    req.flash('msg','User registered.please varify your email.');
                    return  res.redirect('back');
                }else{
                    req.flash('err','Something went wrong.');
                    return  res.redirect('back');
                }
        }
            
        
       
    }catch(error)
    {
        console.log("getting Error..");
        console.log(error.message);
        req.flash('err','Something went wrong.');
        return res.redirect('back');

    }
}

const login=async(req,res)=>{
    try{
        // CHECK cookie----------------------------
        const email= req.cookies.email
        const password= req.cookies.password
        console.log('email')
        console.log(email)
        console.log('get_password')
        console.log(password)
        if(email && password)
        {
            
            const user_data=await userModel.findOne({email:email});
            console.log('user_data');
            console.log(user_data);
            if(user_data)
            {

                console.log('user_data.password')
                console.log(user_data.password)
                const pass_compare=await bcrypt.compare(password,user_data.password)
               
                console.log(pass_compare);
                if(pass_compare)
                {
                    req.session.user_id=user_data._id
                    // set user's objec to session
                    req.session.user=user_data
                    req.session.save()
                    res.cookie('email',email,{expire:10000+Date.now()});
                    res.cookie('password',password,{maxAge:10000000000});
                }
                return res.redirect('/user-dashboard')

            }
        }
       // CHECK cookie----------------------------
        let a="User Login"
       return res.render('user/userLogin',{'data':a,'msg':req.flash('msg'),'err':req.flash('err')})
    }catch(error)
    {

        return res.send(error.message);

    }
}


const login_check=async(req,res)=>{
    try{
        let email=req.body.email
        let password=req.body.password
        const user_data=await userModel.findOne({email:email});
        if(user_data)
        {
            const pass_compare=await bcrypt.compare(password,user_data.password);
            if(pass_compare)
            {
                req.session.user_id=user_data._id
                // set user's objec to session
                req.session.user=user_data
                req.session.save()
                res.cookie('email',email,{expire:10000+Date.now()});
                res.cookie('password',password,{maxAge:10000000000});
                console.log('req.cookies.email');
                console.log(req.cookies.email);
                console.log(req.session.user);
                // use session object value
                console.log(req.session.user.email);
                return res.redirect('/User-Dashboard');
            }
            else{
                req.flash('err','Username and password are invalid.!')
                return res.redirect('back')
            }
        }else
        {
          req.flash('err','Username and password are invalid.!')
          return res.redirect('back')
        }

    }catch(error)
    {
        console.log("getting Error..");
        console.log(error.message);
        req.flash('err','Something went wrong.');
        return res.redirect('back');
    }
}

// const set_cookie=async(req,res,data)=>{
//     try{

//     }catch()
//     {

//     }

// }

const logout = async(req,res)=>{
    try{
        res.clearCookie('email')
        res.clearCookie('password')
        req.session.destroy(()=>{
        return res.redirect('/login');
        });
    }catch(error)
    {
        return res.send(error.message)
    }
}



const forgot_password=async(req,res)=>{
    try{
        let data='Forgot Password'
        res.render('user/userForgotPassword',{'data':data})
    }
    catch(error)
    {
        res.send(error.message)

    }

}

const forgot_password_submit=async()=>{
    try{
        
        return res.send('Password mail Sent..');
    }catch(error)
    {
        return res.send(error.message)

    }
}

const dashboard =async(req,res)=>{
    try{
      const all_user=await userModel.find();
       data={
       'user_session':req.session.user,
       }
        return res.render('user/userDashboard',data)
    }catch(error)
    {
       return res.send(error.message)
    }
}


const all_users=async(req,res)=>{
    try{
        const all_users_data=await userModel.find();
        data={
            'all_user':all_users_data,
            'msg':req.flash('msg'),
            'err':req.flash('err'),
            'user_session':req.session.user,
        }
        return res.render('user/all_users',data)

    }catch(error)
    {
        return res.send(error.message)
    }
}


const user_status=async(req,res)=>{
    try{
        const id= req.params.id;
        const user_data=await userModel.findById(id);
        if (user_data)
        {
            console.log(user_data.status);
            if(user_data.status==0)
            {
                console.log('if => 1');
                const user_update_data=await userModel.findByIdAndUpdate(id,{status:1});
            }else
            {
                const user_update_data=await userModel.findByIdAndUpdate(id,{status:'0'}); 
                console.log('else => 0');
            }
            req.flash('msg','Status updated.');
            return res.redirect('back')

        }else
        {
            req.flash('msg','Status updation failed.')
            return res.redirect('back')
        }
    }catch(error)
    {
         console.log(error.message)
         return res.redirect('back')
    }
}
const user_edit=async(req,res)=>{
    try
    {
        const id=req.params.id
        const user_data=await userModel.findById(id);
        const  datas={
            'data':'Update User',
            'id':id,
            'user':user_data,
            'user_session':req.session.user,
            'msg':req.flash('msg'),
            'err':req.flash('err'),
        }
        return res.render('user/user_edit',datas)
    }catch(error)
    {
        console.log(error.message);
        return res.redirect('/user/edit')
    }

}

const user_update=async(req,res)=>{
try{

    const id= req.params.id
    const user_data_by_id=await userModel.findById(id)
    const user_data_by_email=await userModel.find({email:req.body.email,'_id': {$ne : id}}).count()
    const user_data_by_mobile=await userModel.find({mobile:req.body.mobile,'_id': {$ne : id}}).count()
    if(user_data_by_mobile>0 && user_data_by_email>0)
    {
        req.flash('err',"Email & Mobile number already exist.")
        return res.redirect('back');
    }
    // console.log(user_data_by_email);
    if(user_data_by_email>0)
    {
        req.flash('err',"Email already exist.")
        return res.redirect('back');
    }
    if(user_data_by_mobile>0)
    {
        req.flash('err',"Mobile number already exist.")
        return res.redirect('back');
    }
    // user_data_by_id
    const updated_data={
        'name':req.body.name,
        'email':req.body.email,
        'Mobile':req.body.mobile
    }
    const update_user=await userModel.findByIdAndUpdate(id,updated_data);
    if(update_user)
    {
        req.flash('msg',"user's detail upadated.")
        return res.redirect('/users')
    }else
    {
        req.flash('msg',"Some thing Went wrong")
        return res.redirect('back');
    }


}catch(error)
{
    console.log(error.message)
    return res.redirect('back');
}
}



const user_delete =async(req,res)=>{
    try{
        const id=req.params.id
        const delete_user_by_id=await userModel.findByIdAndDelete(id)
        if(delete_user_by_id)
        {
            req.flash('msg','User Deleted')
            return res.redirect('back');
        }else{
            req.flash('err','Something went wrong')
            return res.redirect('back');
        }

    }catch(error)
    {
      console.log(error.message)
      return res.redirect('back')
    }
}


const profile=async(req,res)=>{
    try{
        const id =req.session.user._id;
        const user_data=await userModel.findById(id)
        context={
            'user':user_data
        }
        return res.render('user/profile',context)

    }catch(error)
    {
        return res.send(error.message)

    }

}

const change_password=async(req,res)=>{
    try{

        const id=req.session.user._id
        const users=await userModel.findById(id)
        context={
            'user':users,
            'msg':req.flash('msg'),
            'err':req.flash('err'),
        }
       return res.render('user/change_password',context)
    }catch(err)
    {
        return res.send(err.message)

    }

}

const change_password_change=async(req,res)=>{
    try{
        const id=req.session.user._id
        const users=await userModel.findById(id)
        const old_pass=req.body.old_password
        const new_pass=req.body.new_password
        const c_pass=req.body.confirm_password

        if (await bcrypt.compare(old_pass,users.password))
        {
            if(old_pass == new_pass)
            {
                req.flash('err','Your New Password must be differrent from the old password.')

            }else
            {
                if(new_pass == c_pass)
                {
                    const hash_pass=await bcrypt.hash(new_pass,10);
                    users.password=hash_pass
                    users.save()
                    req.flash('msg','Your password changed successfully.')
                }else
                {
                    req.flash('err','new Password and confirm password dit not matched.');
                }
            }
        }else
        {
            req.flash('err','Your Old Password is not correct please enter your correct password.')
        }
        
     context={
      }

     return res.redirect('back')
    }catch(err)
    {
        return res.send(err.message)
    }
}




module.exports={
    index,
    register,
    login,
    login_check,
    forgot_password,
    forgot_password_submit,
    dashboard,
    logout,
    all_users,
    user_status,
    user_edit,
    user_update,
    user_delete,
    is_verified,
    profile,
    change_password,
    change_password_change

}