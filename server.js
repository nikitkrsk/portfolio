const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cookieParser = require('cookie-parser');
//app configuration
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));
//rest ports config
//TODO APIs
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//server config
app.listen(process.env.PORT || 8080);
console.log("server is running");
