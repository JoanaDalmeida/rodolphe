var React = require('react');
var action = require('../../action/form');
var Field =  require('./field').component;
var Select =  require('./select').component;

var formMixin = {
  getDefaultProps: ()=>{
    return {
      hasEdit: true,
      isEdit: false};
  },
  fieldFor: function(name){
    return React.createElement(Field, {name: name});
  },
  select: function(name){
    return React.createElement(Select, {name: name});
  },
  /**
   * Get the state initial values.
   * @returns {{alerts: Array}}
   */
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
    action.loadEntity(this._getId());
  },
  _className: function(){
    return "form-horizontal";
  },
  render: function (){
    return (
      <form className={this._className()}>
        {this.renderContent()}
      </form>
    );
  }
};

module.exports = {
  mixin: formMixin,
  component: React.createElement(formMixin)
}
