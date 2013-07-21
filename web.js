var express = require('express');
var fs = require('fs');
var util = require('util')
var app = express();
app.use(express.logger());

var fileName = "index.html"

fs.exists(fileName, function(exists) {
    if (exists){
	fs.watch(fileName, {
	    persistent: true
	}, function(event, fileName) {
	    fs.stat(fileName, function(error, stats) {
		fs.readFileSync(fileName, function(error, stream){
		    var buffer = new Buffer(stats.size);
		    buffer.write(stream);
		    var data = buffer.toString("utf8", 0, buffer.length);
		    app.get('/', function(request, response) {
			response.send(buffer.toString());
		    });
		    console.log(data)
		});
	    });
	});

    }
});


//buffer.write(fs.readFileSync("index.html").toString())

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});