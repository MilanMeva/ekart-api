let router = require('express').Router();
let { User } = require('../schema/user');
let db = require('../db');


router.post("/login", (req, res) => {
    let user = { password, email } = req.body;
    User.findOne({ email: user.email }, (err, doc) => {
        if (err) res.json(err);
        else {
            if (doc.password == user.password)
                res.json({ message: "success" })
            else
                res.json({ message: "invalid credentials" })
        }
    })
})


router.post("/signup", (req, res) => {
    let user = { name, password, email } = req.body;
    User.findOne({ email: user.email }, (err, doc) => {
        if (err) res.json(err)
        else
            if (doc) res.json({ message: "already registered" })
            else {
                let userModel = new User(user);
                userModel.save((err, doc) => {
                    if (err)
                        res.json(err);
                    else
                        res.json({ id: doc._id });
                })
            }
    })

})

module.exports = router;
