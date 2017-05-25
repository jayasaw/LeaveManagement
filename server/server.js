var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//custom modules
var routeToApi =  require('./serverApp/route.js');

mongoose.connect('mongodb://127.0.0.1/test');



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
});

var app = express(); // its create the server

// parse the request body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files
app.use('/', express.static(path.resolve("client")))

app.get('/', function (req, res, next) {  
    res.sendFile(req.url);
});


//custom api
app.use('/api', routeToApi);


app.listen(3000, function () {
    console.log('I am running at 3000 port');
})

