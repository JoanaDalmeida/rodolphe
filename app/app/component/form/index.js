var React = require('react');
var Field =  require('./field').component;
var Select =  require('./select').component;
var Button =  require('./button').component;
var formMixin = {
  getDefaultProps: ()=>{
    return {
      hasEdit: true,
      isEdit: false
    };
  },
  fieldFor: function(name){
    return React.createElement(Field, {
      name: name,
      ref: name
      /*, error: "test d'erreur"*/
    });
  },
  selectFor: function(name){
    return React.createElement(Select, {name: name});
  },
  buttonSave: function(){
    return React.createElement(Button, {
      label: "save",
      type: "submit",
      css:"primary"
    });
  },
  getInitialState:function(){
    return{
      id: this.props.id
    };
  },
  componentDidMount: function(){
    this._loadData();
  },
  _getId: function(){
    return this.state.id;
  },
  _loadData: function(){
    this.action.loadEntity(this._getId());
  },
  _className: function(){
    return "form-horizontal";
  },
  _getEntity: function(){
    return {login: "pierr", password: "pierre"};
  },
  _handleSubmitForm: function(e){
    e.preventDefault();
    console.log("submit", this.refs);
    this.action.saveEntity(this._getEntity());
  },
  render: function (){
    return (
      <form onSubmit={this._handleSubmitForm} className={this._className()}>
        {this.renderContent()}
      </form>
    );
  }
};

module.exports = {
  mixin: formMixin,
  component: React.createElement(formMixin)
}
