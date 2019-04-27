// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
// var friendList = require('../data/friends')
// var fs = require("fs");

var friendData = require("../data/friends");


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
      console.log("all the friends" + friendData);
    });
  

  
    app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
     console.log("you have a new friend" + JSON.stringify(newFriend));
        res.json(newFriend);
        friendData.push(newFriend);
        console.log("made it" + JSON.stringify(friendData))
        })
  

  //   if (tableData.length < 5) {
  //     //assign a server!
  //     req.body.server = randomRickAndMortyCharacter.rickAndMortyCharacter();
  //     tableData.push(req.body);
  //     res.json(req.body);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }
  // });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  

  };
  