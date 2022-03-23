const res = require("express/lib/response")
const { create } = require("../models/collegeModel")
const collegeModel=require("../models/collegeModel")

const createCollege= async function(req,res){
    try{
     let data=req.body
        const {name,fullName,logoLink}=data
        if(!name){
           res.status(400).send({status:false,message:"Name is required"}) 
           return
        }
        if(!fullName){
            res.status(400).send({status:false,message:"full Name is required"}) 
            return
         }
         if(!logoLink){
            res.status(400).send({status:false,message:"Logo Link is required"}) 
            return
         }

         const collegeCreated= await collegeModel.create(data)
         res.status(201).send({status:true,message:"Successfully Created College Name",data:collegeCreated})

    }

catch(error){
    res.status(500).send({status:false,message:error.message})
    return
}
}
module.exports.createCollege=createCollege