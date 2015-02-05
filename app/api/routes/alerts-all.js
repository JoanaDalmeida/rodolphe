var data = require('../data');

module.exports = function(request, reply){
  reply(data.getAll());
};
