//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form');
module.exports =  React.createClass({
  mixins: [formMixin],
  renderContent:function (){
    return(
      <div>
        {this.input("login")}
        {this.input("password")}
      </div>
    );
  }
});
