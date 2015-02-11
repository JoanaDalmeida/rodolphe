//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var actionUser = require('../../action/user');
var Panel = require('../../component/form/panel').component;

module.exports =  React.createClass({
  mixins: [formMixin],
  action: actionUser,
  renderContent:function (){
    return(
      <Panel title={"Adresse de l'utilisateur"}>
          {this.fieldFor("streetNumber")}
          {this.fieldFor("streetName")}
          {this.fieldFor("zipCode")}
          {this.fieldFor("city")}
          {this.buttonSave()}
      </Panel>
    );
  }
});
