var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

function readIndexHtml(){
	var buffer = fs.readFileSync('/app/index.html', 'utf-8');
	return buffer.toString('utf-8');
}

app.get('/', function(request, response) {
  response.send(readIndexHtml());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});