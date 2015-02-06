var root = require('../../conf.json').url + "alerts/";
var url = require('./url-builder');
module.exports = {
  getAll: url(root, 'GET'),
  update: url(root + "/${id}",'PUT'),
  create: url(root, 'POST'),
  ack: url(root + "/${id}/ack", 'POST')
};
