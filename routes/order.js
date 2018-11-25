let router = require('express').Router();



router.get("/",(req,res)=>{
    res.json({message:"Get Works for order"});
})

module.exports = router;
