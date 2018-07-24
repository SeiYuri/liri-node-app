// Node Imports // 

require("dotenv").config();
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var twitterKeys = new twitter(keys.twitterKeys);
var fileSharing = require('fs');

var nodeArg = process.argv;
var liriCommand = process.argv[2];

// - - - - - - - - - - - - - - - - - - //

if (liriCommand === "my-tweets") {
    myTweets();
    return
} else if (liriCommand === "spotify-this-song") {
    spotifiyThisSong();
    return
} else if (liriCommand === "movie-this") {
    movieThis();
    return
} else if (liriCommand === "do-what-it-says") {
    doWhatItSays();
    return
} else if (liriCommand === undefined) {
    console.log("You must give LIRI a command to run.");
    console.log("One of the following will do: 'my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'. Remember to write your command in quotation marks.");
} else {
    console.log("...but this is not a valid command.");
}

function myTweets() {
    var client = new twitter ({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    var params = { screen_name: 'VStaria' };
    params = process.argv[3];
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        } else {
            console.log("An Error Has Occurred: " + error);
        }
    })
};

function spotifiyThisSong(song) {

    var song = process.argv[3];
    if (!song) {
        console.log("The Sign");
    }
    params = song;
    spotify.search({ type: "track", query: params }, function(err, data) {
        if(!err) {
            var songInfo = songInfo;
            for (var i = 0; i < 5; i++) {
                if (songInfo[i] != undefined) {
                    var spotifyResults =
                    "Artist: " + songInfo[i].artists[0].name + "\n" +
                    "Song: " + songInfo[i].name + "\n" +
                    "Album the song is from: " + songInfo[i].album.name + "\n" +
                    "Preview Url: " + songInfo[i].preview_url + "\n" + 
                    "------------------------------ " + i + " ------------------------------" + "\n";
                    console.log(spotifyResults);
                }
            }
        }	else {
            console.log("An Error Has Occurred :" + err);
            return;
        }
    });
};

var spotify = new Spotify ({
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
  });
   
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

function doWhatItSays() {
    fs.readFile('random.txt', "utf8", function(error, data){
        var txt = data.split(',');
    
        spotifyThisSong(txt[1]);
      });
    }

function movieThis() {
    var movieTitle = process.argv[3];
    if (!movieTitle) {
        movieTitle = "Mr. Nobody";
    }
    var movie = movieTitle;

    var queryURL = ("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy");

    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).Rated + "\nProduced In: " + JSON.parse(body).Country + "\nLanguage of the Movie: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors + "\nRotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
        }
        else {
            console.log("An Error Has Occurred " + error);
        }
    })
}