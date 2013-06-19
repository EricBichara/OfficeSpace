
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', 3000);

app.use(express.compress());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/api', function(req,res){
    console.log("api called");
});

app.get('/api2', function(req,res){
    console.log("api2 called");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
