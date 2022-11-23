const mongoose=require("mongoose")

const express=require("express")

const app=express()

//connecting to compass
mongoose.connect("mongodb://127.0.0.1/messi",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
   console.log("database connected")
}).catch((err)=>{
   console.log(err);
})

app.listen(2002,()=>{
   console.log("database connected to port 2002");
})


//schema

const userSchema=new mongoose.Schema({
   name:{
      type:String,
      required:true
   },
   username:{
      type:String,
      required:true
   }
})


//collection creation

const userModel=new mongoose.model("user",userSchema)

module.exports=userModel
