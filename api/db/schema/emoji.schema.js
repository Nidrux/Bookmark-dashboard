/* 
    This schema is linked with the emoji schema of the bot.
    If you change something do it for both files as they point to the same collection in the Mongo DB!
*/
const { Schema, model } = require("mongoose");
const emoji = new Schema({
    guildID: Number,
    guildName: String,
    emoji: String,
    sendContent: {type: Boolean, default: false}
},{ timestamps: true});
module.exports = model('Emoji', emoji);