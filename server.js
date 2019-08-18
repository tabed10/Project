var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = http.Server(app);
var path = require('path');
var mongo = require('mongodb');

var db_url = "mongodb+srv://abed:abed@cluster0-tvorl.mongodb.net/test?retryWrites=true&w=majority"
var db;
var mongoose = require('mongoose');

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})

mongo.MongoClient.connect(db_url,{useNewUrlParser:true}, 
    function(err,client){
      if(err){
        console.log("Could Not Connect DB")
      }else{
        db=client.db('project-database')
        
        }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/static')));

app.get('/static/css/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/css/style.css'));
});

app.get('/static/css/style2.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/css/style2.css'));
});

app.get('/static/JS/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/JS/script.js'));
});

app.get('/updateStatistics',function(req,res){
    res.sendFile(__dirname+'/updateStatistics.html')
})

app.get('/managePlayerRoster',function(req,res){
    res.sendFile(__dirname+'/managePlayerRoster.html')
})

app.get('/stats',function(req,res){
    res.sendFile(__dirname+'/stats.html')
})

app.post('/updateStatistics', function(req, res){
    console.log(req.body)
    db.createCollection('statistics', function(err, collection){
    console.log(collection)
    })
    var collection =db.collection('statistics');
    collection.save(req.body)
    res.send({message:"data received"})
})

app.post('/managePlayerRoster', function(req, res){
    console.log(req.body)
    db.createCollection('players', function(err, collection){
    console.log(collection)
    })
    var collection =db.collection('players');
    collection.save(req.body)
    res.send({message:"data received"})
})


server.listen(3000, 'localhost', function(){
    console.log('Server running');
});


