// Include Server Dependencies
var express = require("express")
var bodyParser = require("body-parser")
var logger = require("morgan")
var mongoose = require("mongoose")
var Article = require("./server/model")

// Create an instance of Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// MongoDB Configuration configuration
mongoose.connect("mongodb://admin:HappyCoding!@ds111479.mlab.com:11479/heroku_3kr2wvk2");

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Specifying the public folder where our index page and css will live
app.use(express.static("./public"));

// Get all of the saved articles
app.get("/api/saved", function(req, res){

    Article.find({})
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(doc);
            }
        })

    console.log("You visited the save route");
})

// Code for saving articles
app.post("/api/saved", function(req, res){

    var newArticle = new Article(req.body);
    console.log(req.body);

    newArticle.save(function(err, doc) {
        if (err) {
            console.log(err);
        }

        else {
            res.send(doc);
        }
    });

    console.log("You made a post request");
});

app.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index_design.html")
})

// Set server to listen
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})