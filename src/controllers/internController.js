const internModel= require("../models/internModel")
const collegeModel=require("../models/collegeModel")

const createIntern=async function(req,res){
    try{
        let data=req.body
        let data1=req.body.collegeId
        const {name,email,mobile}=data
       
        if(!name){
            res.status(400).send({status:false,message:"Name is required"}) 
            return
         }
         if(!email){
            res.status(400).send({status:false,message:" Email is required"}) 
            return
         }
         if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))){
             res.status(400).send({status:false,message:"Email should be valid"})
             return
         }
         if(!mobile){
            res.status(400).send({status:false,message:" Mobile No.is required"}) 
            return
         }
         if(!(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(mobile))) {
             res.status(400).send({status:false,message:"Mobile No. should be valid"})
             return
         }
         if(!data1){
            res.status(400).send({status:false,message:"collegeId is required"})
            return
        }
        let saveData=await collegeModel.findById(data1)
          
        if(!saveData){
            res.status(400).send({status:false,message:"No such Id is present"})
            return
        }else{
            let saveData1=await internModel.create(data)
            res.status(201).send({status:true,message:"Successfully created Intern",data:saveData1})
             return
        }
        

    }
    catch(error){
        res.status(500).send({staus:false,message:error.message})
        return
    }
}

const getCollegeDetails=async function(req,res){
    let data=req.query.collegeName
    if(!data){
        return res.status(401).send({status:false,msg:"no data records"})
    }
    let name=data
    let collegeDetails=await collegeModel.findOne({name})
    if(!collegeDetails){
        res.status(401).send({status:false,msg:"no college details"})
    }
    // let college=JSON.parse(JSON.stringify(collegeDetails)) //cloning the object
    let id=collegeDetails._id
    let internDetails=await internModel.find({collegeId:id})
    if(!internDetails){
        res.status(401).send({status:false,msg:"No interns details found"})
    }
    console.log(internDetails)
    const intern=[]
    intern.push(internDetails)
    // college.interns=[...internDetails]
     let internsdet=await collegeModel.findOne({name}).select({_id:1,name:1,fullName:1,logoLink:1,intern})
    if(!internsdet){
        return res.status(401).send({status:false,msg:"no such details found"})
     }else{
        res.status(201).send({status:true,message:"Successfully created Intern",data:internsdet})
     }

}






module.exports.createIntern=createIntern
module.exports.getCollegeDetails=getCollegeDetails