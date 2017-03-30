console.log("Bot is up and running");
var config = require("./config")
var Twit = require('twit')

var T = new Twit(config)

var stream = T.stream('user');

stream.on('follow',followed);

function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenname= eventMsg.source.screen_name;
    postThisFollow('@' +screenname + " Its time to sit and Enjoy Cricket #CricketBot" )
}

tweeting();

setInterval(tweeting,1000*60*15); //For Every 15 min

function tweeting(){
    var parameters =  { 
            q: '#IPL2017 OR #IPL10 OR Cricket OR #OrangeArmy OR from:virendersehwag', 
            lang : 'en',
            count: 30,
            result_type:'popular'
        }
        
    T.get('search/tweets',parameters,gotData)

    function gotData(err, data, response) {

        var tweets=data.statuses;
        var gotID;
        var i = Math.floor(Math.random()*100);
        i=i%30;
        //for (var i=0;i<tweets.length;i++){
            console.log(tweets[i].text);
            gotID=tweets[i].id_str;
            // console.log("\n"+gotID[i]);
    // }
     
        var string=tweets[i].text
        postThisID(gotID);
    }
 }

function postThisID(string){
        var tweet={             
            id : string
        }   
         T.post('statuses/retweet/:id',tweet,tweeted);
              
     function tweeted(err,data,response){
             console.log("Retweeted");
     }
     
}

function postThisFollow(string){
        var tweet={             
            status : string
        }   
         T.post('statuses/update',tweet,tweeted);
     
     function tweeted(err,data,response){
             console.log("Retweeted");
        }
}
