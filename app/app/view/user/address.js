//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var action = require('../../action/user');
module.exports =  React.createClass({
  mixins: [formMixin],
  action: {
    loadEntity: action.load,
    saveEntity: action.save
  },
  renderContent:function (){
    return(
      <div>
        {this.fieldFor("streetNumber")}
        {this.fieldFor("streetName")}
        {this.fieldFor("zipCode")}
        {this.fieldFor("city")}
        {this.buttonSave()}
      </div>
    );
  }
});
