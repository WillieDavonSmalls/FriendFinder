//npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friendsData = require('./app/data/friends.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
  console.log("I am running Willie Smalls!");
});