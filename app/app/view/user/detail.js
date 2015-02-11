//Get the form mixin.
var React = require('react');
var formMixin = require('../../component/form').mixin;
var Panel = require('../../component/form/panel').component;
var actionUser = require('../../action/user');
module.exports =  React.createClass({
  mixins: [formMixin],
  action: actionUser,
  renderContent:function renderUserDetail(){
    return(
        <Panel title={"Fiche de l'utilisateur"}>
            {this.fieldFor("login")}
            {this.fieldFor("password")}
            {this.buttonSave()}
       </Panel>
    );
  }
});
