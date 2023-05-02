const mongoose = require('mongoose')
const subjectModel= require('../models/subjectModel')
const subjectHistoryModel=require('../models/subjectHistoryModel')
const res = require('express/lib/response')
const { json } = require('body-parser')
const index=async(req,res)=>{
    try{

        const all_subjects=await subjectModel.aggregate([
            {
                $lookup:{
                    from:'users',
                    localField:'user_id',
                    foreignField:'_id',
                    as :"u_name"
                }
            },
            { $sort : { updated_at : -1 } }

        ]);
        console.log('all_subjects========================')
        console.log(all_subjects[0].u_name[0].name)
        // .Toarray(Json.stringify())
        // const all_subjects=await subjectModel.find()
        context={
            session:req.session,
            subjects:all_subjects
        }
        return res.render('masters/Subjects/subjects',context)
    }catch(error)
    {
        return res.send(error.message)
    }
}



const subject_save=async(req,res)=>{
    try{
        const name=req.body.subject_name_txt
        const status=req.body.subject_status_dpd
        const subjects=await new subjectModel();
        
        subjects.name=name
        subjects.status=status
        subjects.history_status='CREATED'
        subjects.user_id=req.session.user._id
        subjects.save();

        const subjectsHistory=await new subjectHistoryModel();
        subjectsHistory.subject_id=subjects._id
        subjectsHistory.name=name
        subjectsHistory.status=status
        subjectsHistory.history_status='CREATED'
        subjectsHistory.user_id=req.session.user._id
        subjectsHistory.save();
        return res.redirect('back')
    }catch(error)
    {
        console.log(error.message)
        return res.redirect('back')
    }
}

const subject_edit=async(req,res)=>{
    try{

    }catch(err)
    {
        console.log(err.message)
        return res.redirect('back')
    }
    
}

const subject_update=async(req,res)=>{
    try{
        const id=req.body.id
        const name=req.body.subject_name_txt
        const status=req.body.subject_status_dpd
        const subjects=await subjectModel.findById(id)
        subjects.name=name
        subjects.status=status
        subjects.user_id=req.session.user._id
        subjects.history_status="UPDATED"
        subjects.updated_at=Date.now()
        subjects.save()
        


        const subjectsHistory=await new subjectHistoryModel();
        subjectsHistory.subject_id=id
        subjectsHistory.name=name
        subjectsHistory.status=status
        subjectsHistory.history_status='UPDATED'
        subjectsHistory.user_id=req.session.user._id
        subjectsHistory.save();
        return res.redirect('back')

    }catch(err)
    {
        console.log(err.message)
        return res.redirect('back')
    }

}



const subject_status=async(req,res)=>{
    try{
        const id=req.params.id
        const subjects=await subjectModel.findById(id)
        if(subjects.status==1)
        {
            subjects.status=0
        }else{
            subjects.status=1
        }
        subjects.user_id=req.session.user._id
        subjects.history_status="STATUS_CHANGED"
        subjects.updated_at=Date.now()
        subjects.save()


        const subjectsHistory=await new subjectHistoryModel();
        subjectsHistory.subject_id=id
        subjectsHistory.name=subjects.name
        subjectsHistory.status=subjects.status
        subjectsHistory.history_status='STATUS_CHANGED'
        subjectsHistory.user_id=req.session.user._id
        subjectsHistory.save();
        return res.redirect('back')

    }catch(err)
    {
        console.log(err.message)
        return res.redirect('back')
    }

}
const subject_delete=async(req,res)=>{
    try{
        const id=req.params.id
        const subjects=await subjectModel.findById(id)
        subjects.delete_status=1
        subjects.user_id=req.session.user._id
        subjects.history_status="DELETED"
        subjects.updated_at=Date.now()
        subjects.save()



        const subjectsHistory=await new subjectHistoryModel();
        subjectsHistory.subject_id=id
        subjectsHistory.name=subjects.name
        subjectsHistory.status=subjects.status
        subjectsHistory.history_status='DELETED'
        subjectsHistory.user_id=req.session.user._id
        subjectsHistory.save();

        return res.redirect('back')

    }catch(err)
    {
        console.log(err.message)
        return res.redirect('back')
    }

}
const subject_restore=async(req,res)=>{
    try{
        const id=req.params.id
        const subjects=await subjectModel.findById(id)
        subjects.delete_status=0
        subjects.user_id=req.session.user._id
        subjects.history_status="RESTORED"
        subjects.updated_at=Date.now()
        subjects.save()


        const subjectsHistory=await new subjectHistoryModel();
        subjectsHistory.subject_id=id
        subjectsHistory.name=subjects.name
        subjectsHistory.status=subjects.status
        subjectsHistory.history_status='RESTORED'
        subjectsHistory.user_id=req.session.user._id
        subjectsHistory.save();

        return res.redirect('back')
    }catch(err)
    {
        console.log(err.message)
        return res.redirect('back')
    }

}



const subject_history=async(req,res)=>{
    try{
        const id=req.params.id
        const all_subjects=await subjectHistoryModel.aggregate([
            {
                $lookup:{
                    from:'users',
                    localField:'user_id',
                    foreignField:'_id',
                    as :"u_name"
                },
            },
            {$match:
                {
                    'subject_id': id,
                 } 
             },
             { $sort : { _id : -1 } }
        ]);

    //     var mongoose = require('mongoose');
    //    var id = mongoose.Types.ObjectId('5ced2388dbbbe124d8671067');

        console.log('all_subjects HISTORY==================')
        console.log(all_subjects )  
        context={
            session:req.session,
            subjects_history:all_subjects
        }
        return res.render('masters/Subjects/subjects_history',context)
    }catch(error)
    {
        return res.send(error.message)
    }
}




module.exports={
    index,
    subject_save,
    subject_edit,
    subject_update,
    subject_status,
    subject_delete,
    subject_restore,
    subject_history

}