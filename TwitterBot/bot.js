console.log("Bot is up and running");
var config = require("./config")
var Twit = require('twit')

var T = new Twit(config)

var stream = T.stream('user');

stream.on('follow',followed);

function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenname= eventMsg.source.screen_name;
    postThis('@' +screenname + " Its time to sit and Enjoy Cricket #CricketBot" )
}

tweeting();

setInterval(tweeting,1000*60*4);

function tweeting(){
    var parameters =  { 
            q: '#IPL2017 OR #IPL10 OR Cricket', 
            lang : 'en',
            count: 1,
            result_type:'popular'
        }
        
    T.get('search/tweets',parameters,gotData)

    function gotData(err, data, response) {
        // console.log(data)
        var tweets=data.statuses;
        var gotID=[];
        for (var i=0;i<tweets.length;i++){
            console.log(tweets[i].text);
            gotID[i]=tweets[i].id;
            // console.log("\n"+gotID[i]);
     }
     
        var string=tweets[tweets.length-1].text
        postThis(string)
    }
 }

function postThis(string){
    console.log("Okay")
     var tweet={             
         status : string
     }

     //T.post('statuses/retweet/:id',tweet,tweeted);
     T.post('statuses/update',tweet,tweeted);
     
     function tweeted(err,data,response){
             console.log(data);
     }
}
