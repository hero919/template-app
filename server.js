var express = require("express");
// var mysql = require("mysql");

var app = express();

// app.get("/", function(req, res) {
//   const connection = mysql.createConnection({
//       host: "",
//       user: "",
//       password: "",
//       database: ""
//   });
//
//   connection.query("", (err, rows, fields) => {
//      res.json(rows);
//   })
//
// })

// Looking for current directory with project name found in package.json
app.use(express.static(__dirname, "/dist/template-app"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/template-app/index.html"));
});

// process.env.PORT is naming convention for port info
// in heroku
app.listen(process.env.PORT || 8080);
