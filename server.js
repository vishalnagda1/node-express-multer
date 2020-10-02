const express = require("express");
const app = express();
const routes = require("./routes");

// mounting main routes
app.use(routes);

const port = process.env.PORT || 3000;

// __basedir to keep the track of project root directory
global.__basedir = __dirname;

app.listen(port, () => console.log(`Listening on port ${port}`));