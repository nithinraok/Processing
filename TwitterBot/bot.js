console.log("Bot is up and running");
var config = require("./config")
var Twit = require('twit')

var T = new Twit(config)

var parameters =  { 
        q: '#IndvsAus', 
        count: 10,
        result_type : 'mixed'
    }

T.get('search/tweets',parameters,gotData)

function gotData(err, data, response) {
    var tweets=data.statuses;
    for (var i=0;i<tweets.length;i++){
        console.log(tweets[i].favorite_count);
        if(tweets[i].favorite_count > 500){
        console.log(tweets[i].text);
    }
 }
}

var tweet={
    status : "First Tweet Posted using Bot #CricketBot"
};

T.post('statuses/update',tweet,tweeted);

function tweeted(err,data,response){
        console.log("It worked");
}
