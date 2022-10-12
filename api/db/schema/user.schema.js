const {Schema, model} = require("mongoose");
const User = new Schema({
    id: {type: String, required: true},
    username: {type: String, required: true}
})
module.exports.User = model('User', User);