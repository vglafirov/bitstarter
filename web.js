var express = require('express');
var fs = require('fs');
var util = require('util')
var app = express();
app.use(express.logger());

var fileName = "index.html"

fs.exists(fileName, function(exists) {
    if (exists) {
	fs.stat(fileName, function(error, stats) {
	    var buffer = new Buffer(stats.size);
	    buffer = fs.readFileSync(fileName)
	    app.get('/', function(request, response) {
		response.send(data);
	    });
	});
    }
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});