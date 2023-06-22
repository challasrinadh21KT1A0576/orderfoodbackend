const mongoose=require("mongoose")

const contentSchema={  
    id:Number,
    name:String,
    number:Number,
    add:String,
    email:String,
    username:String,
    usernumber:String,
    password:String,
}

const Content=mongoose.model("project",contentSchema)

module.exports=Content