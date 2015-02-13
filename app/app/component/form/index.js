var React = require('react');
var Field =  require('./field').component;
var Select =  require('./select').component;
var Button =  require('./button').component;
var assign = require('object-assign');
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
  _getStateFromStores: function(){
    if(this.getStateFromStore){
      return this.getStateFromStore();
    }
    if(this.stores.length === 1){
      return this.stores[0].value.get(this.props.id);
    }
    var  newState = {}; this.stores.map((store)=>{
      newState[store.name] = store.value.get(this.props.id);
    });
    return newState;
  },
  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(this._getStateFromStores());
  },
  callMountedActions: function(){
    this._loadData();
  },
  _registerListeners: function(){
    if(this.stores){
      this.stores.map((store)=>{
        store.value.addChangeListener(this._onChange);
      });
    }
  },
  _unRegisterListeners: function(){
    if(this.stores){
      this.stores.map((store)=>{
        store.value.removeChangeListener(this._onChange);
      });
    }
  },
  componentDidMount: function(){
    this._registerListeners();
    if(this.registerListeners){
      this.registerListeners();
    }
    if(this.callMountedActions){
      this.callMountedActions();
    }
  },
  componentWillUnmount: function(){
    this._unRegisterListeners();
    this.unregisterListeners();
  },
  _getId: function(){
    return this.state.id;
  },
  _loadData: function(){
    this.actions.load(this._getId());
  },
  _className: function(){
    return "form-horizontal";
  },
  _getEntity: function(){
    return {login: "pierr", password: "pierre"};
  },
  _handleSubmitForm: function handleSumbitForm(e){
    e.preventDefault();
    console.log("submit", this.refs);
    this.validate();
    this.actions.save(this._getEntity());
    return false;
  },
  validate: function validateForm(){
    var validationMap = {};
    for(var inptKey in this.refs){
        assign(validationMap,  {[inptKey]: this.refs[inptKey].validate()});
    }
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
