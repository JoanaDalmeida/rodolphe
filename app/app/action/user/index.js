var AppDispatcher = require('../../dispatcher');
var fetch = require('../../core/fetch');
var URL = require('../../config/server');
module.exports = {
  load: function(userId){
    fetch(URL.user.get({id:userId})).then(function(data){
      AppDispatcher.dispatch('user:loaded', data);
    }).then(null, function(err){
      AppDispatcher.dispatch('user:loaded:error', err);
    });
  },
  save: function(data){
    console.log('saveEntity', data);
  }
};
