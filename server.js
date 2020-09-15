const express = require("express");
const path = require("path");
const mysql = require("mysql");

var app = express();

app.get("/api/test", function(req, res) {
  const connection = mysql.createConnection({
      host: process.env.DB_HOST_NAME || "localhost",
      user: process.env.DB_USER_NAME || "your username",
      password: process.env.DB_PASSWORD || "your password",
      database: process.env.DB_SCHEMA_NAME || "your local db schema"
  });

  connection.query("SELECT * FROM team_member", (err, rows, fields) => {
     res.json(rows);
  })

})



// Looking for current directory with project name found in package.json
// Comment following lines if running locally
app.use(express.static(__dirname + "/template-app"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/template-app/index.html"));
});

// process.env.PORT is naming convention for port info
// in heroku
app.listen(process.env.PORT || 8080);
