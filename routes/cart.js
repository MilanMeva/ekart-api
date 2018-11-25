let router = require('express').Router({mergeParams:true});
let Cart = require('../schema/cart')


router.get("/:cartid",(req,res,next)=>{
    let id = req.params.cartid;
    Cart.find({_id:id}).then(data=>{res.send(data)}).catch(next)
})

router.put("/:cartid",(req,res,next)=>{
    let id = req.params.cartid;
    let cart =  {id,...req.body};
    Cart.updateCart(data).then(data=>{
        res.json({
            message:"Cart Updated"
        })
    }).catch(next)
})

module.exports = router;
