module.exports = function(Pet) {
    Pet.findRiskZone = function(uname, cb) {

	var seneca = require('seneca')() 
	var client = seneca.client({ host:'172.17.0.3', port:3000 }) // Envia al topico de la suma de los operandos y espera respuesta 
	client.act({ api: 'dogs', cmd: 'risk', uname:uname}, function (err, result) {
	  cb(null, result);
	})
    }
     
    Pet.remoteMethod(
        'findRiskZone', 
        {
          accepts: {arg: 'uname', type: 'string'},
          returns: {arg: 'data', type: 'string'},
	  http: {path: '/findRiskZone', verb: 'get'}
        }
    );

    Pet.countPets = function(uname, cb) {

        var seneca = require('seneca')()
        var client = seneca.client({ host:'172.17.0.3', port:3000 }) // Envia al topico de la suma de los operandos y espera respuesta
        client.act({ api: 'dogs', cmd: 'count', uname:uname}, function (err, result) {
          cb(null, result);
        })
    }

    Pet.remoteMethod(
        'countPets',
        {
          accepts: {arg: 'uname', type: 'string'},
          returns: {arg: 'data', type: 'string'},
          http: {path: '/countPets', verb: 'get'}
        }
    );



};
