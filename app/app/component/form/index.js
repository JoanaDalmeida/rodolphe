var React = require('react');
var action = require('../../action/form');
var Input =  require('./input');
var Select =  require('./select');

module.exports = {
  getDefaultProps: ()=>{
    return {
      hasEdit: true,
      isEdit: false};
  },
  input: function(name){
    return React.createElement(Input, {name: name});
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
  render: function (){
    return (
      <form>
      {this.renderContent()}
      </form>
    );
  }
};
