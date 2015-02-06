var data = require('../data');
module.exports = function(request, reply){
  var alert = request.payload;
  console.log(alert.id);
  console.log(request.params.id);
  if(request.params.id !== alert.id){
    throw new Error("L'identifiant de l'url n'est pas le même que celui de l'objet envoyé.");
  }
  alert.ack = true;
  reply(data.update(alert));
};
