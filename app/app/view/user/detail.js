//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
module.exports =  React.createClass({
  mixins: [formMixin],
  renderContent:function (){
    return(
      <div>
        {this.fieldFor("login")}
        {this.fieldFor("password")}
      </div>
    );
  }
});
