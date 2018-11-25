let router = require('express').Router({mergeParams: true});



router.get("/:cardid",(req,res)=>{
    res.json(req.params);
})


module.exports = router;