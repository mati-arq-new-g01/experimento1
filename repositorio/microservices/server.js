var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

var seneca = require( 'seneca' )()
  .use( require('./microservice.js') )
  .listen(3000)


var express = require('express');
var app = express();
    app.use('/public',express.static(__dirname + '/public'));
	app.use( require( 'body-parser' ).json() );
    app.use( allowCrossDomain);
    app.use(seneca.export('web'));
    app.listen(9000,'0.0.0.0');