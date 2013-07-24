var fs = require('fs');
var input = "index.html";
var output = fs.readFileSync(input).toString('utf-8');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
