// Include Server Dependencies
var express = require("express")
var bodyParser = require("body-parser")
var logger = require("morgan")
var mongoose = require("mongoose")

// Create an instance of Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Specifying the public folder where our index page and css will live
app.use(express.static("./public"));

// Placeholder routes
app.get("/api/saved", function(req, res){
    console.log("You visited the save route");
})

app.post("/api/saved", function(req, res){
    console.log("You made a post request");
})

app.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index_design.html")
})

// Set server to listen
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})