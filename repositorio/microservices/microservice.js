module.exports = function service(options) {


this.add({ api: 'dogs', cmd: 'risk' }, findRisk)
this.add({ api: 'dogs', cmd: 'count' }, totalPets)

	var seneca = require('seneca')()
		seneca.use('mongo-store',{
	  name:'test',
	  host:'172.17.0.2',
	  port:27017
	});


	
  function findRisk(msg, respond) {
	 var pet = seneca.make$('pet');
	pet.load$({id: msg.uname}, function (err, pet) { 
		respond( null, pet);
	});
  }



  function totalPets(msg, respond) {


    var MongoClient = require('mongodb').MongoClient;
        var assert = require('assert');
        var url = 'mongodb://172.17.0.2/test';
	var pet = seneca.make$('pet');

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	 
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
		respond(null, list);
	    		});
		});


	};
    }



}
