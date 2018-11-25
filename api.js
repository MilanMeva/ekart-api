let router = require('express').Router({mergeParams: true});





router.use("/auth",require('./routes/auth'));
router.use("/product",require('./routes/product'));

// middleware to protect routes

router.use((req,res,next)=>{
    console.log("intersepted")
    next();
})

router.use("/user",require('./routes/user'));





module.exports = router;