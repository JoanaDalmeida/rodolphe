//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var actionUser = require('../../action/user');
module.exports =  React.createClass({
  mixins: [formMixin],
  action: actionUser,
  renderContent:function (){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">{"Adresse de l'utilisateur"}</div>
        <div className="panel-body">
          {this.fieldFor("streetNumber")}
          {this.fieldFor("streetName")}
          {this.fieldFor("zipCode")}
          {this.fieldFor("city")}
          {this.buttonSave()}
        </div>
      </div>
    );
  }
});
