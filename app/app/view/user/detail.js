//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var action =
module.exports =  React.createClass({
  mixins: [formMixin],
  handleSaveClick: function(){

  },
  renderContent:function (){
    return(
      <div>
        {this.fieldFor("login")}
        {this.fieldFor("password")}
      </div>
    );
  }
});
