var Hapi = require('hapi');
var printRoutes = require('./util/print-routes');
var routes = require('./routes');
var config = { connections: { routes: { cors: true } } }; //, docs: true };
var server = new Hapi.Server(config);
server.connection({ port: 3001 });
server.route(routes);
server.start(function() {
  console.log('Server started at: ' + server.info.uri);
  printRoutes(routes);
});
