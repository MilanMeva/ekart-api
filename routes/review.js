let router = require('express').Router({mergeParams:true});


router.get("/:productId",(req,res,next)=>{
    res.json({message:"Retrived All Revies for specific product"})
})

router.post("/",(req,res,next)=>{
    res.json({message:"Posting new Review"})
})