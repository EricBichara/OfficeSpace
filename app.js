/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , dbManager = require('./server/dbManager.js')
  , userDBManager = require('./server/userDBManager.js')
  , newsDBManager = require('./server/newsDBManager.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('dbString',
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    //'mongodb://ericbichara:bananaStand90@dharma.mongohq.com:10021/app16402159' );
    'mongodb://localhost/test');

app.use(express.compress());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

/** MongoDB **/
mongoose.connect(app.get('dbString'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
    console.log('db opened');
});

/** Services **/
app.get('/getProjects', dbManager.getProjects);
app.post('/updateProject', dbManager.updateProject);
app.post('/deleteProjectById', dbManager.deleteProjectById);
app.post('/getProjectById', dbManager.getProjectById);

app.get('/getNews', newsDBManager.getNews);
app.post('/updateNews', newsDBManager.updateNews);
app.post('/deleteNews', newsDBManager.deleteNews);

app.get('/getUsers', userDBManager.getUsers);
app.post('/updateUser', userDBManager.updateUser);
app.post('/deleteUser', userDBManager.deleteUser);
app.post('/getUserById', userDBManager.getUserById);


/** Create Server **/
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});