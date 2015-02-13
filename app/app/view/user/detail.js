//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var Block = require('../../component/form/block').component;
var actionsUser = require('../../action/user');
var UserStore = require('../../store/user');
module.exports =  React.createClass({
  mixins: [formMixin],
  stores: [{name: "user", value: UserStore}],
  actions: actionsUser,

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
