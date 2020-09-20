const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const mysql = require("mysql");


var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const pool = mysql.createPool({
  host: process.env.DB_HOST_NAME || "localhost",
  user: process.env.DB_USER_NAME || "root",
  password: process.env.DB_PASSWORD || "Zzqssy95",
  database: process.env.DB_SCHEMA_NAME || "db_test"
})

app.get("/api/persons", function(req, res) {
  console.log("calling get");
  pool.getConnection((err, conn) => {
    console.log(err);
    conn.query("SELECT id, name, age, location FROM team_member", (err, rows, fields) => {
      res.json(rows);
      conn.release();
      if (err) {
        console.log(err);
      }
    })
  });
})


app.delete("/api/persons/:id", function(req, res) {
  let id = req.params.id;
  const query = `DELETE FROM team_member WHERE id=${id}`;
  pool.getConnection((err, conn) => {
    conn.query(query, (err, rows, fields) => {
      res.json(rows);
      conn.release();
      if (err) {
        console.log(err);
      }
    })
  });
})

app.post("/api/persons/", function(req, res) {
  const name = req.body.name;
  const age = req.body.age;
  const location = req.body.location;
  const query = `INSERT INTO team_member (name, age, location) VALUES ('${name}', ${age}, '${location}')`;
  pool.getConnection((err, conn) => {
    conn.query(query, (err, rows, fields) => {
      res.json(rows);
      conn.release();
      if (err) {
        console.log(err);
      }
    })
  });
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
