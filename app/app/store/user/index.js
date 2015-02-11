var AppDispatcher = require('../../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
//var uuid = require('uuid');

var CHANGE_EVENT = 'change';

var USER_ACTIONS = {
  "UPDATE": "UPDATE",
  "CREATE": "CREATE",
  "DELETE": "DELETE"
};


var _users = {}; // object which represents a user.

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(id) {
  delete _users[id];
}
function update(user){
  _users[user.id] = assign(_users[user.id], user);
}
function create(user){
  _users[user.id] = user;
}
function insert(user){
  _users[user.id] = user;
}

function get(id){
  return _users[id];
}


var UserStore = assign({}, EventEmitter.prototype, {

  /**
   * Load a user by its id.
   * @param  {string} id - User identifier.
   * @return {[type]}    [description]
   */
  get: function(id){
    return get(id);
  },
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  update: function(user) {
    update(user) ;
    this.emit(CHANGE_EVENT);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    var user = action.data;
    switch(action.type) {
      case USER_ACTIONS.CREATE:
          create(user);
          UserStore.emitChange();
        break;
      case USER_ACTIONS.DELETE:
        destroy(action.id);
        UserStore.emitChange();
        break;
      case USER_ACTIONS.UPDATE:
        update(user);
        break;
      case "user:load":
        insert(user);
        UserStore.emitChange();
        break;

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = UserStore;
