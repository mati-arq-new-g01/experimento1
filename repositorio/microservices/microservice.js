module.exports = function service(options) {


  this.add({ api: 'dogs', cmd: 'risk' }, findRisk)

	var seneca = require('seneca')()
		seneca.use('mongo-store',{
	  name:'test',
	  host:'127.0.0.1',
	  port:27017
	});
	
  function findRisk(msg, respond) {
	 
	  //Guardar modelo pet
	 var pet2 = seneca.make$('pet');

/*	  
	  var pet = seneca.make$('pet')
	 // pet.id = 'shaggy'
	  pet.type  = 'cat'
	  pet.uname = msg.uname;
	  pet.latitude = msg.latitude;
	  pet.longitude = msg.longitude;
	  pet.displayName = 'Shaggy';
	  //pet.markers = '[{lat: 4.66600, lng: -74.06410} ,{lat: 4.65781, lng: -74.09393},{lat: 4.65894, lng: -74.09539},{lat: 4.65757, lng: -74.09659},{lat: 4.65612, lng: -74.09698}]';
	  //pet.riskSite = '[{ displayName : "Parque Simón Bolivar",  point : {lat: 4.65781, lng: -74.09341 },   evacuation : {         origin: {lat: 4.66139, lng: -74.09715},        destination: {lat: 4.66600, lng: -74.06410}    }]';
	  


	 pet.save$(function(err,pet){
		if( err ) return console.log(err);
		respond( null, { respond: pet });
	  })
	*/

	pet2.load$({id: msg.uname}, function (err, pet2) { 
		respond( null, pet2);
	});
  }
}
