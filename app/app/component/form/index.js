var React = require('react');
var action = require('../action/form');
var Input =  require('./input');
var Select =  require('./select');

module.exports = {
  getDefaultProps: ()=>{
    return {
      hasEdit: true,
      isEdit: false};
  },
  input: (name)=>{
    return React.createElement(Input, {name: name});
  },
  select: (name)=>{
    return React.createElement(Select, {name: name});
  },
  /**
   * Get the state initial values.
   * @returns {{alerts: Array}}
   */
  getInitialState:()=>{
    return{
      id: this.props.id
    };
  },
  componentDidMount: ()=>{
    this._loadData();
  },
  _getId: ()=>{
    return this.state.id;
  },
  _loadData: ()=>{
    action.loadEntity(this._getId());
  },
  render: ()=>{
    throw new Error('Not Implemented');
  }
};
