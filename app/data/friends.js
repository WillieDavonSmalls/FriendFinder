//npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friendsData = 
[
    {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": ["5","1","4","4","5","1","2","5","4","1"]
    },
    {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": ["4","2","5","1","3","2","2","1","3","2"]
    },
    {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": ["5","2","2","2","4","1","3","2","5","5"]
    },
    {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": ["3","3","4","2","2","1","3","2","2","3"]
    },
    {
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": ["4","3","4","1","5","2","5","3","1","4"]
    },
    {
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": ["4","4","2","3","2","2","3","2","4","5"]
    },
    {
    "name": "joey donuts",
    "photo": "https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
    "scores": ["2","3","4","3","4","3","3","5","4","1"]
    },
    
    {
    "name": "Leslie",
    "photo": "https://avatars3.githubusercontent.com/u/34491285?s=460&v=4",
    "scores": ["5","3","1","3","1","2","2","2","5","1"]
    },
    {
    "name": "liri",
    "photo": "www.google.com",
    "scores": ["1","1", "1","1","1","1","1","1","1","1"]
    },
    {
    "name": "Avi Davis",
    "photo": "https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg",
    "scores": ["3","4","2","3","3","3","3","2","3","4"]
    }
]


// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;
  
    console.log(newcharacter);
  
    // We then add the json the user sent to the character array
    characters.push(newcharacter);
  
    // We then display the JSON to the users
    res.json(newcharacter);
  });

  // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "survey.html"));
  });