let router = require('express').Router({ mergeParams: true });
let db = require("../db");
let { User } = require("../schema/user");
let { Address } = require("../schema/address");


router.post("/", (req, res, next) => {
    let userId = req.params.userid;
    let a = { address, pincode, phoneNo, state, city } = req.body;
    let add = new Address(a);
    add.save().then(data => {
        User.findByIdAndUpdate({ _id: userId }, { $push: { addresses: data._id } })
            .exec().then(data => {
                res.status(201).json({
                    message:"Address Added Successfully",
                })
            }).catch(next)
        }).catch(next)
    })

    router.put("/:addressid", (req, res, next) => {
        let userId = req.params.userid;
        let addressid = req.params.addressid;
        let a = { _id: address, address, pincode, phoneNo, state, city } = req.body;
        Address.updateAddress(a).then(data => res.json(data)).catch(next);
    })

    module.exports = router;