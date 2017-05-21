// requires
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3004, function() {
  console.log('up 3004');
});
