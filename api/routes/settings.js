const router = require("express").Router();
const regExp = new RegExp(/^[0-9]*$/gm); // Regular expression to test if string only contains numbers
const isAuth = require("../components/isAuth");
const emoji = require("../db/schema/emoji.schema");

/* 
    https://localhost:PORT/settings/:guild_id
    @param guild_id INT

    Called on first guild settings page load on the client.
*/
router.get("/:guild_id", isAuth, (req, res) => {
    let _guildID = req.params?.guild_id;
    if(!_guildID) return res.send({"status": "failed", "message": "Param :guild_id was not provided"})
    if(!regExp.test(_guildID)) return res.send({"status": "failed", "message": "Provided param :guild_id is not of a valid type"});
    /* 
    
        Find settings based on the filter {guildID: _guildID};
        Exclude certain fields to send them over the api. {_id: 0, _v: 0};
        0 = exclude, 1 = include

        Maybe need to add in some more safety features to check if guild provided is actually in the user's session guild list.
    */
    emoji.findOne({guildID: _guildID},{_id: 0, __v: 0} ,(error, doc) => {
        if(error) {
            console.error(error);
            return res.send({"status": "failed", "message": "Something went wrong! Failed to find emoji settings"})
        }
        if(!doc) {
            return res.send({"status": "failed", "message": "Something went wrong! Failed to find emoji settings"})
        }
        return res.send(doc)
    });
});
/* 
    https://localhost:PORT/settings/set/:guild_id
    @param guild_id INT

    Called when user saved changes on the dashboard.
*/
router.get("/set/:guild_id", isAuth,(req, res) => {
    let _guildID = req.params?.guild_id;
    if(!_guildID) return res.send({"status": "failed", "message": "Param :guild_id was not provided"})
    if(!regExp.test(_guildID)) return res.send({"status": "failed", "message": "Provided param :guild_id is not of a valid type"});
    //(TODO) update guild document in mongoDB with new settings;
    return res.end({"status": "ok"});
});
module.exports = router;