let router = require('express').Router();



router.get("/",(req,res)=>{
    res.json({message:"Get Works for cart"});
})

module.exports = router;
