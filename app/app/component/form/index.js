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
      ref: name,
      value: this.state[name],
      error: this.state.error ? this.state.error[name] : undefined
    });
  },
  selectFor: function(name){
    //Todo: implement it
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
  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(this.getStateFromStores());
  },
  callMountedActions: function(){
    this._loadData();
  },
  componentDidMount: function(){
    if(this.registerListeners){
      this.registerListeners();
    }
    if(this.callMountedActions){
      this.callMountedActions();
    }
  },
  componentWillUnmount: function(){
    this.unregisterListeners();
  },
  _getId: function(){
    return this.state.id;
  },
  _loadData: function(){
    this.action.load(this._getId());
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
    this.validate();
    this.action.save(this._getEntity());
    return false;
  },
  validate: function validateForm(){
    var validationMap = {};
    for(var inptKey in this.refs){
        validationMap[inptKey] = this.refs[inptKey].validate();
    }
    validationMap["login"] =  "Le login est invalide";
    this.setState({error: validationMap});
    //console.log(validationMap);
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
