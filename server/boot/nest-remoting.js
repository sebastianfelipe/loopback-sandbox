'use strict';

module.exports = function(Server) {
  var ModelA = Server.models.ModelA;
  ModelA.nestRemoting('modelBs');
};
