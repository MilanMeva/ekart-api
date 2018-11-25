let router = require('express').Router();



router.get("/",(req,res,next)=>{
    res.json({message:"Get Works for order"});
})

router.post("/",(req,res,next)=>{
    res.json({message:"Post Works"})
})


module.exports = router;
