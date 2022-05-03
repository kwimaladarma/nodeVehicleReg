const express = require('express');
const Registrations = require('../models/Registrations');


const router = express.Router();


//new registration
router.post("/registrations/new",(req, res)=>{
    let newRegistration = new Registrations(req.body);
    const testing = req.body.plateNo
    const regex = /ශ්‍රී/;
    const isExisting = regex.test(testing);
    console.log(isExisting);
    if(isExisting===true){
       console.log("vintage")
        req.body.vehitype==="vintage"
    }
    newRegistration.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"registration Ok"
        });
    });
});

//view registrations
router.get('/registrations',(req,res)=>{
    Registrations.find().exec((err,Registrations)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            availableRegistrations:Registrations
        })
    });
});

//edit/update
router.put("/registrations/update/:id",(req,res)=>{
    Registrations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Registrations)=>{
            if(err){
                return res.status(400).json({
                error});
            }return res.status(200).json({
                success:"Updated data"
            })
        }
    );
});

//delete registration
router.delete('/registrations/delete/:id',(req,res)=>{
    Registrations.findByIdAndRemove(req.params.id).exec((err,deletedRegistrations) =>{
        if(err) return res.status(400).json({
            message:"Registration not deleted",err

        });
        return res.json({
            message:"Deleted",deletedRegistrations
        });

    });
});

//getRegistration
router.get("/registrations/:id",(req,res)=>{
    let regId = req.params.id;
    Registrations.findById(regId,(err,registrations)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            registrations
        })
    })
})


module.exports = router;
