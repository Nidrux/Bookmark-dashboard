const { User } = require("../db/schema/user.schema");
const {deepEquals}= require("./deepEqual");
module.exports = async (req, res, next) => {
    if(!req.user) return res.redirect("/auth");
    const isInSession = await User.findOne({id: req.user.id, username: req.user.username});
    if(!isInSession) return res.redirect("/auth");
    if(!deepEquals(req.user, isInSession)) return res.redirect("/auth");
    next();
}