var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
var Mongoclient=require('mongodb').Mongoclient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body)
  MongoClient.connect('mongodb://localhost:27017',function(err,client){
    if(err)
    console.log("error")
    else
    console.log("connected")
    client.db("abhishek").collection('user').insertOne(req.body)
  })

  res.send("thank you...")
});

module.exports = router;
