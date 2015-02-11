var AppDispatcher = require('../../dispatcher');
var fetch = require('../../core/fetch');
var URL = require('../../config/server');
module.exports = {
  load: function(userId){
    fetch(URL.user.get({id:userId})).then(function(data){
      AppDispatcher.handleServerAction({type: "user:load", data: data});
    }).then(null, function(err){
      AppDispatcher.handleServerAction({type: 'user:loaded:error', error: err});
    });
  },
  save: function(data){
    console.log('saveEntity', data);
  }
};
