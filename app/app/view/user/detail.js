//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var action = require('../../action/user');
var Button = require('../../component/form/button').component;
module.exports =  React.createClass({
  mixins: [formMixin],
  action: {
    loadEntity: action.load,
    saveUser: action.saveUser
  },
  renderContent:function (){
    return(
      <div>
        {this.fieldFor("login")}
        {this.fieldFor("password")}
        <Button action="saveUser" key="Save" css='success btn-large' />
      </div>
    );
  }
});
