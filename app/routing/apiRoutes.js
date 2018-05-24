

var friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        res.json(friendsData);
    });

    function findBestFriend(scores) {

        var maxDiff = 4 * 10;
        var winningFriend;

        for (var i = 0; i < friendsData.length; i++) {
            var friendScores = friendsData[i].scores;
            var totalDiff = 0;
 
            for (var j = 0; j < friendScores.length; j++) {
                totalDiff = totalDiff + Math.abs(scores[j] - friendScores[j]);
            }
            if (totalDiff <= maxDiff) {
                winningFriend = friendsData[i];
                maxDiff = totalDiff;
            }
        }
        return winningFriend;
    }

    // API POST Requests
    app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        var bestFriend = findBestFriend(currentUser.scores);
        res.json(bestFriend);
        friendsData.push(currentUser);
    });


    // Clear data for friendsData
    app.post("/api/clear", function() {
      
        friendsData = [];

        console.log(friendsData);
    });
};
