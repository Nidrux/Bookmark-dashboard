const express = require('express');
const app = express();
const PORT = 3000;

const settingsRouter = require("./routes/settings.js");
app.use("/settings", settingsRouter)

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`listening on port ${PORT}`)
});
