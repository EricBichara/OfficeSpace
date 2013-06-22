/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , dbManager = require('./server/dbManager.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('dbString',
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/HelloMongoose');
app.use(express.compress());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/getOffices', function(req, res){
    res.json(dbManager.fetchOffices());
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});