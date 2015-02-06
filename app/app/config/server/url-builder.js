var urlProcessor = require('./url-processor');
/*
* @module config/server/url-builder
* @param url - url with params such as http://url/entity/${id}
* @param method - HTTP verb {GET, POST, PUT, DELETE}
* @return {function} 
*/
module.exports =  function(url, method, data){
  return function(){
    return {
      url: urlProcessor(url, data),
      method: method
    };
  };
};
