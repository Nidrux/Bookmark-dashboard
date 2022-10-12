require("dotenv").config();
const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const passport = require("passport");
const database = require("./db/connection");
const discord = require("./strategies/discord.strategy.js");
/* 
    Database
*/
database.then(() => {console.log("Database connected")}).catch(err => console.error(err));
/* 
    Session
*/
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 600000
    },
    saveUninitialized: false,
    resave: false,
    name: "Bookmark"
}));
/* 
    passport, yea pretty cool
*/
app.use(passport.initialize());
app.use(passport.session());
/* 
    ROUTES
*/
// handle auth router.
const authRouter = require("./routes/auth.js");
app.use("/auth", authRouter)
// handle settings router.
const settingsRouter = require("./routes/settings.js");
app.use("/settings", settingsRouter)
// handle dashboard router.
const dashboardRouter = require("./routes/dashboard.js");
app.use("/dashboard", dashboardRouter)
app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`listening on port ${PORT}`)
});
