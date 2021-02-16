const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
const server = http.createServer(app);
const port = 8080;
server.listen(port);
