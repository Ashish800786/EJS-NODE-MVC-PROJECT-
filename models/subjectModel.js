const mongoose = require('mongoose')
const subject=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    status:{
        type:Number,
        required:true,
    },
    delete_status:{
        type:Number,
        required:true,
        default:0
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    updated_at:{
        type:Date,
        default:Date.now()
    },
    history_status:{
        type:String,
        default:null
    },
})

const Subject = mongoose.model('subject',subject)
module.exports= Subject