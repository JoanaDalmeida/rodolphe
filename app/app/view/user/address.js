//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var actionUser = require('../../action/user');
var Block = require('../../component/form/block').component;

module.exports =  React.createClass({
  mixins: [formMixin],
  actions: actionUser,
  renderContent:function (){
    return(
      <Block title={"Adresse de l'utilisateur"}>
          {this.fieldFor("streetNumber")}
          {this.fieldFor("streetName")}
          {this.fieldFor("zipCode")}
          {this.fieldFor("city")}
          {this.buttonSave()}
      </Block>
    );
  }
});
