var AppDispatcher = require('../../dispatcher');

module.exports = {
  load: function(userId){

    console.log('loadEntity', userId);
  },
  save: function(data){
    console.log('saveEntity', data);
  }
};
