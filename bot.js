console.log('The bot is starting...');

var weather = require('weather-js');
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
// Options:
// search:     location name or zipcode
// degreeType: F or C
var weather_data;
weather.find({search: 'Ennis, TX', degreeType: 'F'},
function(err, result) {
  if (err){
    console.log(err);
  }
  else {
    weather_data = result;
    //console.log(JSON.stringify(result, null, 2));
    weather_data = weather_data[0];
    current = weather_data['current'];
    var tweet_text = 'The skies are ' + current.skytext.toLowerCase() +
    ' and it feels like ' + current.feelslike + '°F ' +
    'with winds at ' + current.windspeed;
    tweet(tweet_text);

  }
});


// post a tweet
function tweet(text){
  T.post('statuses/update', { status: text },
  function(err, data, response) {
    if (err){
      console.log(err);
    }
    else{
      console.log('tweeted: ' + data.text)
    }

  })
}






/*      Output
[
  {
    "location": {
      "name": "San Francisco, CA",
      "zipcode": "94109",
      "lat": "37.7835152",
      "long": "-122.4169334",
      "timezone": "-7",
      "alert": "",
      "degreetype": "F",
      "imagerelativeurl": "http://wst.s-msn.com/i/en-us/"
    },
    "current": {
      "temperature": "65",
      "skycode": "30",
      "skytext": "Partly Cloudy",
      "date": "2014-06-05",
      "observationtime": "13:53:00",
      "observationpoint": "Oakland, Metro Oakland International Airport",
      "feelslike": "65",
      "humidity": "63",
      "winddisplay": "16 mph NW",
      "day": "Thursday",
      "shortday": "Thu",
      "windspeed": "16",
      "imageUrl": "http://wst.s-msn.com/i/en-us/law/30.gif"
    },
    "forecast": [
      {
        "low": "53",
        "high": "66",
        "skycodeday": "28",
        "skytextday": "Mostly Cloudy",
        "date": "2014-06-05",
        "day": "Thursday",
        "shortday": "Thu",
        "precip": "0"
      },
      {
        "low": "53",
        "high": "66",
        "skycodeday": "30",
        "skytextday": "Partly Cloudy",
        "date": "2014-06-06",
        "day": "Friday",
        "shortday": "Fri",
        "precip": "0"
      },
      {
        "low": "54",
        "high": "70",
        "skycodeday": "30",
        "skytextday": "Partly Cloudy",
        "date": "2014-06-07",
        "day": "Saturday",
        "shortday": "Sat",
        "precip": "0"
      },
      {
        "low": "54",
        "high": "74",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2014-06-08",
        "day": "Sunday",
        "shortday": "Sun",
        "precip": "0"
      },
      {
        "low": "54",
        "high": "69",
        "skycodeday": "30",
        "skytextday": "Partly Cloudy",
        "date": "2014-06-09",
        "day": "Monday",
        "shortday": "Mon",
        "precip": "0"
      }
    ]
  }
]
*/
