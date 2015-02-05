var Hapi = require('hapi');
var routes = require('./routes');
var config = {
  cors: true
}; //, docs: true };
var server = new Hapi.Server(null, config);
server.connection({ port: 3001 });
server.route(routes);
server.start(function() {
  console.log('Server started at: ' + server.info.uri);
});
