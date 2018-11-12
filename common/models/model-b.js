'use strict';

var loopbackUtils = require('loopback/lib/utils');

module.exports = function(ModelB) {
  var Model = ModelB;

  Model.beforeRemote('prototype.__link__modelCs',
  	function(ctx, instance, next) {
    	console.log('DEBUG BEFORE ModelB.prototype.__link__modelCs');
      let error = new Error('');
      error.statusCode = 401;
      error.name = 'Remote method not allowed';
      error.message = 'Remote method not allowed';
      error.code = 'REMOTE_METHOD_NOT_ALLOWED';
    	next(error);
    	return next.promise;
  	});

  Model.prototype['__exists__modelCs'] = function(fk, options, cb) {
    cb = cb || loopbackUtils.createPromiseCallback();
    let self = this;
    if (self['modelCIds'].indexOf(fk) > -1) cb();
    else {
      let error = new Error();
      error.statusCode = 404;
      cb(error);
    }
    return cb.promise;
  };
};
