//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var Block = require('../../component/form/block').component;
var actionUser = require('../../action/user');
module.exports =  React.createClass({
  mixins: [formMixin],
  action: actionUser,
  renderContent:function renderUserDetail(){
    return(
        <Block title={"Fiche de l'utilisateur"}>
            {this.fieldFor("login")}
            {this.fieldFor("password")}
            {this.buttonSave()}
       </Block>
    );
  }
});
