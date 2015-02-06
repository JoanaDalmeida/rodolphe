/*global Backbone, module, require*/
var labels = require('../config/i18n').alerte;
var merge = require('lodash/object/merge');
module.exports = Backbone.Model.extend({
  subject: "alerte",
  metadata: require('../config/metadata').alerte,
  getField: function getFieldByName(name){
      return {
        name: name,
        value: this.get(name),
        metdata: this.metadata[name],
        label: labels[name],
        error: this.has('errors') && this.get('errors')[name] !== undefined ? this.get('errors')[name]: undefined
      };
  },
  toJSON: function(){
    return  merge(
      {metadata: this.metadata},
      Backbone.Model.prototype.toJSON.call(this)
    );
  }
});
