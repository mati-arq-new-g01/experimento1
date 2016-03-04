var seneca = require('seneca')() 
var client = seneca.client({ host:'172.17.0.2', port:3000 }) // Envia al topico de la suma de los operandos y espera respuesta 
client.act({ role: 'api', cmd: 'risk', vars:''}, function (err, result) {
  console.log(result);
})
