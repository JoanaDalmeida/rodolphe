var Backbone = require('backbone');
var merge = require('lodash/object/merge');
module.exports = Backbone.Model.extend({
  metadata: {
    firstName: {
      domain: "DO_TEXT",
      symbol: ":-)",
      required: true
    },
    lastName: {
        domain: "DO_TEXT",
        symbol: ":-)"
    },
    isNice: {
      domain: "DO_BOOLEAN",
      symbol: "[x",
      required: true
    }
  },
  toJSON: function(){
    return  merge(
    {metadata: this.metadata},
      Backbone.Model.prototype.toJSON.call(this)
    );
  }
});
