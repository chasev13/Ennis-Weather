# Ennis-Weather
A twitterbot that tweets the weather in Ennis, Tx

* Written in Node.js
* Gets weather using [weather-js](https://www.npmjs.com/package/weather-js)
* Tweets using the [Twit](https://www.npmjs.com/package/twit)
* Uses [Chron](https://www.npmjs.com/package/cron) to Schedule tweet for 8:00AM everyday
* Runs Continuously on a free Amazon EC2 instance using [forever](https://www.npmjs.com/package/forever)
