'use strict';

module.exports = function(ModelA) {
  var Model = ModelA;

  Model.beforeRemote('prototype.__link__modelBs__modelCs',
  	function(ctx, instance, next) {
      console.log('DEBUG BEFORE prototype.__link__modelBs__modelCs');
      next();
      return next.promise;
    });
};
