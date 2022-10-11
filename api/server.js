const express = require('express');
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "../client/build")))
// handle settings router.
const settingsRouter = require("./routes/settings.js");
app.use("/settings", settingsRouter)

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`listening on port ${PORT}`)
});
