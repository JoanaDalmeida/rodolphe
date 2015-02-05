var data = require('../data');

module.exports = function(request, reply){
  reply(data.add(JSON.parse(request.payload)));
};
