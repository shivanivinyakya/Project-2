const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId

const internSchema=new mongoose.Schema({

    name: {
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        validate:{
            validator:function(email){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
            },message:`Please fill the valid email address`,isAsync:false
        }
    },
    mobile:{
        type:Number,
        unique:true,
        minlength:10,
        validate:{
            validator:function(mobile){
                return [/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/] 
            },message:'Please provide a valid 10 digit Mobile Number',isAsync:false
         },
        },
    collegeId:{
       type: ObjectId,
       ref:"colleges",
       required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }


  
}, {timestamps:true})

module.exports = mongoose.model("Intern", internSchema)  
    
    