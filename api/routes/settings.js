const router = require("express").Router();
const regExp = new RegExp(/^[0-9]*$/gm); // Regular expression to test if string only contains numbers
/* 
    https://localhost:PORT/settings/:guild_id
    @param guild_id INT

    Called on first guild settings page load on the client.
*/
router.get("/:guild_id", (req, res) => {
    let _guildID = req.params?.guild_id;
    if(!_guildID) return res.send({"status": "failed", "message": "Param :guild_id was not provided"})
    if(!regExp.test(_guildID)) return res.send({"status": "failed", "message": "Provided param :guild_id is not of a valid type"});
    //(TODO) Get settings from mongoDB;
    return res.send({"status": "ok"});
});
/* 
    https://localhost:PORT/settings/set/:guild_id
    @param guild_id INT

    Called when user saved changes on the dashboard.
*/
router.get("/set/:guild_id", (req, res) => {
    let _guildID = req.params?.guild_id;
    if(!_guildID) return res.send({"status": "failed", "message": "Param :guild_id was not provided"})
    if(!regExp.test(_guildID)) return res.send({"status": "failed", "message": "Provided param :guild_id is not of a valid type"});
    //(TODO) update guild document in mongoDB with new settings;
    return res.end({"status": "ok"});
});
module.exports = router;