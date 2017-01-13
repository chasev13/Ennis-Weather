console.log('The bot is starting...');

var weather = require('weather-js');
var Twit = require('twit');
var config = require('./config');
var CronJob = require('cron').CronJob;

var T = new Twit(config);
var weather_data;
var timeZone = "US/Central";
var pattern = '0 0 8 1-31 * *'

// schedule tweet for 8:00:00 AM every morning
new CronJob(pattern, tweet, null, true, timeZone);


// post the weather tweet
function tweet(){
  weather.find({search: 'Ennis, TX', degreeType: 'F'}, gotWeatherData)
}


function posted_Tweet(err, data, response) {
  if (err){
    console.log(err);
  }
  else{
    console.log('tweeted: ' + data.text)
  }
}


function gotWeatherData(err, result) {
  if (err){
    console.log(err);
  }
  else {
    weather_data = result;
    weather_data = weather_data[0];
    current = weather_data['current'];
    var tweet_text = 'The skies are ' + current.skytext.toLowerCase() +
    ' and it feels like ' + current.feelslike + '°F ' +
    'with winds at ' + current.windspeed;
    T.post('statuses/update', { status: tweet_text }, posted_Tweet)
    }
  }
