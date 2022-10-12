const discordStrategy = require("passport-discord").Strategy;
const passport = require("passport");
let scopes = ["identify", "email", "guilds", "guilds.join"];
const {User} = require("../db/schema/User");
passport.serializeUser((user, cb) => {
    cb(null, user.id);
});
passport.deserializeUser(async (id, cb) => {
    const user = await User.findOne({id: id});
    if(user) return cb(null, user);
});
passport.use(new discordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: scopes 
}, async (accessToken, refreshToken, profile, cb) => {
    try {
        // Find user in session DB;
        const user = await User.findOne({id: profile.id})
        if(!user) { // If user doesn'y exist create new one
            const newUser = await User.create({
                id: profile.id,
                username: profile.username
            })
            newUser.save();
            return cb(null, newUser);
        }
        return cb(null, user);
    } catch (error) {
        //If error, you die :'( )
        return cb(error, null)
    }
}));