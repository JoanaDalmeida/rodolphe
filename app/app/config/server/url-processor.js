var compile = require('lodash/string/template');
module.exports = function(url, data){
  return compile(url)(data);
};
