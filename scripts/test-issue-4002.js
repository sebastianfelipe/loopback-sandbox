'use strict';

var Server = require('../server/server.js');
var request = require('request');

request
  .put('http://localhost:3000/api/modelas/1/modelbs/1/modelcs/rel/1')
  .on('response', function(response) {
  	if (response['statusCode'] === 401)
  		console.log('RESPONSE NOT ALLOWED')
  })
