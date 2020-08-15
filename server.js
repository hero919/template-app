const express = require("express");
const path = require("path");
const mysql = require("mysql");

var app = express();

app.get("/api/test", function(req, res) {
  const connection = mysql.createConnection({
      host: process.env.DB_HOST_NAME || "localhost",
      user: process.env.DB_USER_NAME || "root",
      password: process.env.DB_PASSWORD || "Zzqssy95",
      database: process.env.DB_SCHEMA_NAME || "db_test"
  });

  connection.query("SELECT * FROM team_member", (err, rows, fields) => {
     res.json(rows);
  })

})



// Looking for current directory with project name found in package.json
// Comment following lines if running locally
app.use(express.static(__dirname + "/dist/template-app"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/template-app/index.html"));
});

// process.env.PORT is naming convention for port info
// in heroku
app.listen(process.env.PORT || 8080);
