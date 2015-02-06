/**
 * Print the routes list.
 * @param  {array} routes - Routes array.
 * @return {undefined}
 */
module.exports = function(routes){
  for(var i = 0; i < routes.length; i++){
    var rt = routes[i];
      console.log('URL: ', rt.path , ' VERB: ', rt.method);
  }
};
