var root = require('../../conf.json').url + "users/";
var url = require('./url-builder');
module.exports = {
  getAll: url(root, 'GET'),
  update: url(root + "${id}/",'PUT'),
  create: url(root, 'POST'),
  get: url(root + "${id}/", 'GET')
};
