const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mg_userManagement_db')
require('dotenv').config()
console.log('process.env.ENV_CODE');
console.log(process.env.ENV_CODE);
const  express = require('express');
const app = express();
const port = 3000;

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

var upload=multer({storage:storage}).array('img',12);


// ROUTERS---------------------------------------->
const userRouter=require('./routes/userRoute');
const teacherRouter=require('./routes/teacherRoute');
const studentRouter = require('./routes/studentRoute');
const designationRouter= require('./routes/designationRoute');
const subjectRouter= require('./routes/subjectRoute')
const schoolRoute= require('./routes/schoolRoute')
const classroomRouter= require('./routes/classroomRoute')
const sectionRouter= require('./routes/sectionRoute')
const attendanceReportRouter = require('./routes/ReportsRoutes/attendanceReportRoute');
const examReportRouter=require('./routes/ReportsRoutes/examReportRoute')
const testReportRouter=require('./routes/ReportsRoutes/testReportRoute')
const feePricingRouter=require('./routes/PricingRoutes/feePricingRoute')
const salaryPricingRouter= require('./routes/PricingRoutes/salaryPricingRoute')
// / ROUTERS---------------------------------------->
const cookieParser=require('cookie-parser')
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));
// npm install express-session connect-flash --save
const session=require('express-session')
const flush=require('connect-flash');

const oneWeek = 1000 * 60 * 60 * 24 * 7;
app.use(session({
    secret:'session',
    cookie:{secure:false,maxAge:oneWeek},
    resave:false,
    saveUninitialized:false
}));
app.use(flush());
app.use('/',userRouter);
// MASTER ROUTES --------------------------------------------->
app.use('/master/teachers',teacherRouter);
app.use('/master/students',studentRouter);
app.use('/master/designations',designationRouter);
app.use('/master/subjects',subjectRouter);
app.use('/master/schools',schoolRoute);
app.use('/master/class-rooms',classroomRouter);
app.use('/master/sections',sectionRouter);

// REPORTS ROUTES--------------------------------------------->
app.use('/reports/attandance',attendanceReportRouter);
app.use('/reports/exam',examReportRouter);
app.use('/reports/test',testReportRouter);

// REPORTS ROUTES--------------------------------------------->
app.use('/pricing/fee',feePricingRouter);
app.use('/pricing/salary',salaryPricingRouter);

//app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

