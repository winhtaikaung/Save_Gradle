var express = require('express')
var path = require('path')
var open = require("open");
var clip = require('cliparoo');

var app = express()
var port = 4001 
var is_open = process.argv[2] == '-o' ? true :false;

app.use(express.static(path.join(__dirname, 'www')));

app.get('/', function (req, res) {
  res.send('distributionUrl=http\\://127.0.0.1:' + port + '/gradle-2.2.1-all.zip')
})

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
	
  console.log('Local Gradle Server listening at http://%s:%s', host, port)
	
	var gradle_URL = 'distributionUrl=http\\://127.0.0.1:' + port + '/gradle-2.2.1-all.zip';
	console.log(gradle_URL)
	
	// open in browser
	if(is_open){
		open("http://127.0.0.1:" + port + "/");
	}
	
	// copy to clip
	clip(gradle_URL, function(err){
	  if (err) {
	  	console.log("");
	  }
	  console.log('copied! you can paste anywhere');
	});
	
})
