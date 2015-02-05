var urlProcessor = require('./url-processor');
module.exports =  function(url, method, data){
  return function(){
    return {
      url: urlProcessor(url, data),
      method: method
    };
  };
};
