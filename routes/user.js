let router = require('express').Router();
let { User } = require('../schema/user');

// getting users by id
router.get("/:userid", (req, res, next) => {
    console.log(req.params)
    let userid = req.params.userid;

    User.findUserById(userid).then(data => {
        res.json(data)
    }).catch(next)
})

// upadating users by id
router.put("/:userid", (req, res, next) => {
    console.log(req.params)
    let userid = req.params.userid;
    let user = { name, password } = req.body;

    User.updateUserById(userid, user).then(data => {
        res.json(data)
    }).catch(next)
});

router.use("/:userid/cart", require("./cart"));
router.use("/:userid/order", require("./order"));
router.use("/:userid/address", require("./address"));
router.use("/:userid/card", require("./card"));

module.exports = router;
