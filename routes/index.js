var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
var Mongoclient=require('mongodb').Mongoclient
var helper=require('../helper/product-adding')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body)
  helper.addproduct(req.body,(result)=>{
    res.render('index')
  })
  })



router.get('/table',(req,res,next)=>{

  helper.getDetails().then((details)=>{

    res.render('table-view/table.hbs',{details})

  })
 
})

module.exports = router;
