var root = require('../../conf.json').url + "alerts/";
var urlBuilder = require('./url-builder');
module.exports = {
  getAll: urlBuilder(root, 'GET'),
  update: urlBuilder(root + "/${id}",'PUT'),
  create: urlBuilder(root, 'POST'),
  ack: urlBuilder(root + "/${id}/ack", POST)
};
