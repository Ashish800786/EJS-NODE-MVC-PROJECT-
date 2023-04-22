const res=require('express/lib/response')
const userModel=require('../models/userModel')
const bcrypt = require('bcrypt')

// const check_cookie=async(req,res,next)=>{
// try{


//    const get_email= req.cookies.email
//    const get_password= req.cookies.password
//     if(get_email && get_password)
//     {
//         const user_data=await userModel.findOne({email:get_email});
//         if( user_data)
//             {
//                 const check_pass= bcrypt.compare(get_password,user_data.password);
//                 if(check_pass)
//                 {
//                     req.session.user_id=user_data._id
//                     // set user's objec to session
//                     req.session.user=user_data
//                     req.session.save()
//                     res.cookie('email',get_email,{expire:10000+Date.now()});
//                     res.cookie('password',get_password,{maxAge:10000000000});
//                     return res.redirect('/User-Dashboard')
//                 }

//             }
//     }
// }catch(error)
// {
//     return res.send(error.message)
//     console.log(error.message)
// }

//     next();
// }

// const set_cookie=async(req,res,next)=>{
//    const set_email= res.cookie('email',req.session.user.email,{expire:100000+Date.now()});
//    const set_password= res.cookie('email',req.session.user.email,{expire:100000+Date.now()});
//     next()
// }

const is_login=async(req,res,next)=>{
    try{
        if(req.session.user_id)
        {
            // set_cookie(req,res,next);

        }else
        {
            res.redirect('/login');
        }
        next();

    }catch(error)
    {
        res.send(error.message)

    }
}

const is_logout=async(req,res,next)=>{
    try{
        if(req.session.user_id)
        {
            res.redirect('/User-Dashboard');
        }else
        {
            // check_cookie(req,res,next);
        }
        next();

    }catch(error)
    {
        res.send(error.message)

    }

}

module.exports={
    is_login,
    is_logout,
    // set_cookie,
    // check_cookie,
}