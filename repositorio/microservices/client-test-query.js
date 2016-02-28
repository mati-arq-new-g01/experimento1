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

	
// Envia al topico de la suma de los operandos y espera respuesta
/*
client.act({ role: 'api', cmd: 'risk', vars:''}, function (err, result) {
  console.log(result);
})
*/
