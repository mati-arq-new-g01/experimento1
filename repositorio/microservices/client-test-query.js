var seneca = require('seneca')()

var client = seneca.client({ host:'localhost', port:3000 })


	seneca.use('mongo-store',{
	  name:'test',
	  host:'127.0.0.1',
	  port:27017
	});


	 var pet = seneca.make$('pet')
	  
	  pet.load$({id: 'buz2'}, function (err, pet) { 
		console.log(pet);
	});


var MongoClient = require('mongodb').MongoClient; 
var assert = require('assert'); 
var url = 'mongodb://localhost:27017/test'; 

MongoClient.connect(url, 
function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  findConsumos(db, function() {
      db.close();
  });
});

var findConsumos = function(db, callback) {

var aggregateQuery = [
  {
    $group: { _id: "$cust_id", count: { $sum: 1 } }
  },
  {
    $match: { count: { $gt: 1 } }
  }
];

pet.native$(function (err, db) {
    var collection = db.collection('pet');
    collection.aggregate(aggregateQuery, function (err, list) {
        if (err) return done(err);
        console.log("Found records:", list);
    });
});

};
