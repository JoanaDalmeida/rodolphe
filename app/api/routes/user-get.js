
module.exports = function(request, reply){
  var user = {firstName: "Pierre", lastName: "Besson", login: "pbesson", streetNumber: "6", streetName: "Villa des freesias", zipCode: "91140", city: "Villebon sur Yvette"};
  user.id = request.params.id;
  reply(user);
};
