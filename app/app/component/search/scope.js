var React = require('react');
var scopeMixin = {
  getDefaultProps: function get(){
    return {
      list: [],
      value: undefined,
      isDeployed: false
    };
  },
  getInitialState: function(){
    return {
      isDeployed: this.props.isDeployed,
      value: this.props.value
    };
  },
  buttonScopeLabel: function(){
    if(!this.state.value){
      return "Choose your scope";
    }return this.state.value;
  },
  handleOnclick: function(event){
    this.setState({value: event.target.value, isDeployed: false});
  },
  getValue: function(){
    return this.state.value;
  },
  handleDeployClick: function(){
    this.setState({isDeployed: !this.state.isDeployed});
  },
  renderScopeList: function renderScopeList(){
    if(!this.state.isDeployed){return;}
    return this.props.list.map((scope)=>{
      var selectedValue = this.state.value === scope.code ? "active": "";
      return(
        <li key={scope.code} value={scope.code} className={"list-group-item " + selectedValue} onClick={this.handleOnclick}>
          {scope.label}
        </li>
      );
    });
  },
  render: function renderScopeComponent(){
    return (
      <div className={this.props.className + " search-scope"}>
        <div onClick={this.handleDeployClick}><span>{"scope: " + this.buttonScopeLabel()}</span><i className={"fa fa-caret-square-o-"+ (this.state.isDeployed ? "up": "down")}></i></div>
        <ul className="list-group">
          {this.renderScopeList()}
        </ul>
      </div>
    );
  }
};

module.exports = {
  mixin: scopeMixin,
  component: React.createClass(scopeMixin)
};
