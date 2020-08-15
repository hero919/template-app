const express = require("express");
const path = require("path");


// var mysql = require("mysql");

var app = express();


// Looking for current directory with project name found in package.json
app.use(express.static(__dirname + "/dist/template-app"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/template-app/index.html"));
});

// process.env.PORT is naming convention for port info
// in heroku
app.listen(process.env.PORT || 8080);
