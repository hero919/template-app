var express = require("express");
var mysql = require("mysql");

var app = express();

app.get("/", function(req, res) {
  const connection = mysql.createConnection({
      host: "",
      user: "",
      password: "",
      database: ""
  });

  connection.query("", (err, rows, fields) => {
     res.json(rows);
  })

})
// process.env.PORT is naming convenstion for port info
// in heroku
const port = process.env.PORT || 3000
// Looking for current directory with project name found in package.json
app.use(express.static(__dirname, "/dist/template-app"));


app.listen(port);
