var fw = require('../util/file-writer');
var data = require('./db.json');
var uuid = require('uuid');
function getDataFromDb(){
  var _array = [];
  for(var d in data){
    _array.push(data[d]);
  }
  return _array;
}

function setDataToDb(newData){
  data = newData;
  fw(data, 'data/db.json');
}

function add(element){
  element.id = uuid.v4();
  data[element.id] =  element;
  fw(data, 'data/db.json');
  return element;
}

function update(element){
  data[element.id] = element;
  fw(data, 'data/db.json');
  return element;
}

function get(id){
  return data[id];
}
function del(id){
  delete data[id];
  fw('data/db.json');
}

module.exports = {
  getAll: getDataFromDb,
  setAll: setDataToDb,
  add: add,
  update: update,
  get: get,
  delete: del
};
