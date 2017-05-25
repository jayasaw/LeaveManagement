var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var routeToApi =  require('./serverApp/route.js');

mongoose.connect('mongodb://localhost:27017/test');
//custom api
var app = express(); // its create the server



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
});


// parse the request body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', express.static(path.resolve("client")))

app.get('/', function (req, res, next) {  
    res.sendFile(req.url);
});


app.use('/api', routeToApi);


app.listen(3000, function () {
    console.log('I am running at 3000 port');
})

