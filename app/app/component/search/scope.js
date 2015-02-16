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
    console.log("click", event);
  },
  getValue: function(){
    return this.state.value;
  },
  renderScopeList: function renderScopeList(){
    return this.props.list.map((scope)=>{
      var selectedValue = this.props.value === scope.code ? "active": "";
      return(
        <li key={scope.code} value={scope.code} className={selectedValue} onClick={this.handleOnclick}>
          {scope.label}
        </li>
      );
    });
  },
  render: function renderScopeComponent(){
    return (
      <div className="search-scope">
        <button>{this.buttonScopeLabel()}</button>
        <ul>
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
