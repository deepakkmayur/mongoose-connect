const express=require("express")
// import { Mongoose } from 'mongoose';
const mongoose = require('mongoose');

const app=express()


mongoose.connect('mongodb://127.0.0.1/messi', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
   console.log("db connected successfully")
}).then(()=>{
   app.listen(2000,()=>{
      console.log(`connected to port 2000`);
   })
}).catch((err)=>{
   console.log(err);
})

// app.listen(2000,()=>{
//    console.log(`connected to port 2000`);
// })


//mongoose schema creation

const newSchema=new mongoose.Schema({
   name:{
      type:String,
      required:true
   },
   email:{
      type:String,
      required:true
   },
   phone:{
      type:Number
   },
   date:{
      type:Date,
      default:Date.now()
   }
   
},
{timeStamps:true}
)


//collection creation
const userModel=new mongoose.model("users",newSchema)



//inserting data 
const inserData=new userModel({
   name:"deepak k m "
   ,
   email:"deepak@gmail.com"
   ,
   phone:"8281",
   
})

inserData.save()




