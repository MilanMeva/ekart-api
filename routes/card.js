let router = require('express').Router({mergeParams: true});



router.get("/",(req,res,next)=>{
    res.json({message:"All Cards"});
})

router.get("/:cardid",(req,res)=>{
    res.json(req.params);
})

router.post("/",(req,res,next)=>{
    res.json({message:"Card Post Works"})
})

router.put("/:cartid",(req,res,next)=>{
    res.json({message:"Card put Works"})
})

module.exports = router;