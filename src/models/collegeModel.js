const mongoose=require("mongoose")

const collegeSchema=new mongoose.Schema({
    name: { 
        type:String,
        required:"College name is Mandatory",
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:"Full Name is required"
    },
    logoLink:{
        type:String,
        required:true
    },
     isDeleted: {
         type:Boolean,
         default:false
     }
     

},{timestamps:true})

module.exports = mongoose.model("colleges", collegeSchema)