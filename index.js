const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Content=require("./schema")

console.log(Content)

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://challasrinadh:challasrinadh@cluster0.tjyiuc0.mongodb.net/test?retryWrites=true&w=majority")
 .then(()=>{
    console.log("mongodb connected succesfully")
 })
 .catch((err)=>{
    console.log(err)
 })
 app.get("/",(req,res)=>{
    res.send("server started succesfully")
 })

 app.post("/add",(req,res)=>{
    console.log("data from frent end ",req.body)
    const{id,name,number,add,}=req.body
    const newData=new Content({
       id, name,number,add,
    })
    newData.save()
    res.send("added")

 })

 app.post("/ad",(req,res)=>{
   console.log("data from frent end ",req.body)
   const{email,username,usernumber,password}=req.body
   const newData=new Content({
      email,username,usernumber,password
   })
   newData.save()
   res.send("added")

})

 app.get("/retrieve",(req,res)=>{
      Content.find()
        .then(found=>res.json(found))
 })
 

app.listen(7777,()=>console.log("server is started "))