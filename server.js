const express = require("express");
const request = require("request");

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function (req, res) {
  console.log("Server listening on http://localhost:3000");
});
