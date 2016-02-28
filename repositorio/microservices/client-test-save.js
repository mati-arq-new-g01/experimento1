var seneca = require('seneca')()

var client = seneca.client({ host:'localhost', port:3000 })


	seneca.use('mongo-store',{
	  name:'test',
	  host:'127.0.0.1',
	  port:27017
	});


	 var pet = seneca.make$('pet')
	  pet.id = 'toby'
	  pet.type  = 'dog'
	  pet.uname = 'Toby';
	  pet.displayName = 'Tobias';
	  pet.markers = [];
	  //pet.markers = JSON.parse('[{"lat": 4.66600, "lng": -74.06410} ,{"lat": 4.65781, "lng": -74.09393},{"lat": 4.65894, "lng": -74.09539},{"lat": 4.65757, "lng": -74.09659},{"lat": 4.65612, "lng": -74.09698}]');
	  //pet.riskSite = JSON.parse('[{ "displayName" : "Parque Simón Bolivar",  "point" : {"lat": 4.65781, "lng": -74.09341 },   "evacuation" : {         "origin": {"lat": 4.66139, "lng": -74.09715},        "destination": {"lat": 4.66600, "lng": -74.06410} }   }]');	  
	  
	  //pet.markers = JSON.parse('[{"lat": 4.65476, "lng": -74.08142} ,{"lat": 4.65575, "lng": -74.08095},{"lat": 4.65656, "lng": -74.08035},{"lat": 4.65703, "lng": -74.07945},{"lat": 4.65327, "lng": -74.08095}]');
	  //pet.riskSite = JSON.parse('[{ "displayName" : "Parque de los Novios",  "point" : {"lat": 4.65476, "lng": -74.08141 },   "evacuation" : {         "origin": {"lat": 4.65484, "lng": -74.08141 },        "destination": {"lat": 4.66600, "lng": -74.06410} }   }]');
	  
	  pet.markers = JSON.parse('[{"lat": 4.67501, "lng": -74.05854} ,{"lat": 4.67477, "lng": -74.05761},{"lat": 4.67390, "lng": -74.05604},{"lat": 4.67355, "lng": -74.05531},{"lat": 4.67322, "lng": -74.05467}]');
	  pet.riskSite = JSON.parse('[{ "displayName" : "Parque el Virrey",  "point" : {"lat": 4.67436, "lng": -74.05653 },   "evacuation" : {         "origin": {"lat": 4.67436, "lng": -74.05653 },        "destination": {"lat": 4.6721613, "lng": -74.0557497} }   }]');
	  
	  
	  pet.save$(function(err,pet){
		if( err ) return console.log(err);
		console.log('guardado');
	  })

	
// Envia al topico de la suma de los operandos y espera respuesta
/*
client.act({ role: 'api', cmd: 'risk', vars:''}, function (err, result) {
  console.log(result);
})
*/
