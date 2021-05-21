const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");

const app = express();

const port = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
//need bodyParser.json() otherwise request will send empty Object to db
app.use(bodyParser.json());
app.use(cors());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require("./app/routes")(app, database.db());
  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
