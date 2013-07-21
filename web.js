var express = require('express');
var fs = require('fs');
var util = require('util')
var app = express();
app.use(express.logger());

var fileName = "index.html"

var stat = fs.statSync(fileName)

var fileInfo = util.inspect(stat)

var buffer = Buffer(fileInfo['size'])

buffer.write(fs.readFileSync("index.html").toString())

app.get('/', function(request, response) {
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});