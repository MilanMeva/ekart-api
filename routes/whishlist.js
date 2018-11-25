let router = require('express').Router({mergeParams:true});


router.get("/",(res,res,next)=>{
    res.json({message:"whishlist get works"})
})

router.put("/",(res,res,next)=>{
    res.json({message:"whishlist put works"})
})