const mongoose = require('mongoose')
const subjectHistory=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    subject_id:{
        type:String,
        // type:mongoose.Schema.Types.ObjectId,
        ref:'subject',
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    status:{
        type:Number,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    history_status:{
        type:String,
        default:null
    },
    updated_list:{
        type:String,
        default:null
    },
})

const SubjectHistory = mongoose.model('subjectHistory',subjectHistory)
module.exports= SubjectHistory