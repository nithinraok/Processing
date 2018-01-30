console.log("Bot is up and running");
var config = require("./config")
var Twit = require('twit')

var T = new Twit(config)

var stream = T.stream('user');

stream.on('follow',followed);

stream.on('tweet',replied);

function followed(eventMsg){
    var name = eventMsg.source.name;
    var screenname= eventMsg.source.screen_name;
    postThisFollow('@' +screenname + " Its time to sit and Enjoy Cricket #CricketBot" )
}

function replied(eventMsg){
	var tweetTo = eventMsg.in_reply_to_screen_name;
	var tweetFrom = eventMsg.user.screen_name;
	var repliedText = eventMsg.text;
	var status_id = eventMsg.id_str;

	if(tweetTo == 'bot_cricket'){
		var string_text = 'Hey @' + tweetFrom + ' thanks for tweeting me #CricketBot' ;

		postThisReply(string_text,status_id);
	}

}

tweeting();

setInterval(tweeting,1000*60*12); //For Every 12 min

function tweeting(){
    var parameters =  {
            q: ' #SAvIND OR #INDvSA OR #BBL07 OR #IPL OR #U19CWC',  //OR from:ICC 
            lang : 'en',
            count: 10,
            result_type:'popular'
        }

    T.get('search/tweets',parameters,gotData)

    function gotData(err, data, response) {
        var tweets=data.statuses;
        var gotID;
        var i = Math.floor(Math.random()*100);

        if(tweets.length!=0){
            i=i%tweets.length;
            console.log(tweets[i].text);
            // console.log(tweets[i]);
            gotID=tweets[i].id_str;
        var string=tweets[i].text;
        console.log("favourites_count is "+tweets[i].favorite_count);
        console.log("retweet_count is "+tweets[i].retweet_count);
        if(tweets[i].favorite_count>1 || tweets[i].retweet_count>1){
        postThisID(gotID);
    }
    }
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
             console.log("Mentioned User");
        }
}

function postThisReply(string,id){
        var tweet={
            status : string,
			in_reply_to_status_id : id
        }
         T.post('statuses/update',tweet,tweeted);

     function tweeted(err,data,response){
             console.log("Replied to tweet");
        }
}
