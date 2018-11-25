let router = require('express').Router();



router.get("/",(req,res)=>{
  res.json({message:"works"})
})

module.exports = router;
