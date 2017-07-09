// requires express and path in order to use them once installed
var express = require('express');
var path = require('path');
var app = express();

//global variable, now port is not hard coded and app can be lanuch using heroku
var port = process.env.PORT || 9000;

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));

// This should be the last route
// /* is wildcard will respond to all requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// spin up server and is listening on localhost:3004
app.listen(port, function() {
  console.log('up 9000');
});
