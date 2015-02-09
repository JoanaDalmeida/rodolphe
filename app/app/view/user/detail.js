//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var actionUser = require('../../action/user');
module.exports =  React.createClass({
  mixins: [formMixin],
  action: actionUser,
  renderContent:function (){
    return(
      <div>
        {this.fieldFor("login")}
        {this.fieldFor("password")}
        {this.buttonSave()}
      </div>
    );
  }
});
