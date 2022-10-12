const router = require("express").Router();
const isAuth = require("../components/isAuth");
router.get("/", isAuth ,(req, res) => {
    return  res.json({
        status: 200,
        msg: "good"
    });
});
module.exports = router;