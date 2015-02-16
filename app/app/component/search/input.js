var React = require('react');
var Scope = require('./scope').component;
var SearchInputMixin = {
  getDefaultProps: function(){
    return {
      placeholder: "",
      value:"defaultValue",
      activeScope:2,
      scopes: [
        {code: 1, label: "Scope1"},
        {code: 2, label: "Scope2"},
        {code: 3, label: "Scope3"}]
    };
  },
  getValue: function(){
    return {
      scope: this.refs.scope.getValue(),
      query: this.refs.query.getDOMNode().value
    };
  },
  onKeyUpHandler: function onKeyUpHandler(event){
    console.log("keyUp", event);
  },
  handleOnClick: function(){
    console.log('Search value', this.getValue());
  },
  renderScopes: function renderScopes(){
    return this.props.scopes.map((scope)=>{
      var selectedValue = this.props.activeScope === scope.code;
      return(
        <option key={scope.code} value={scope.code} selected={selectedValue}>
          {scope.label}
        </option>
      );
    });
  },
  render:function renderSearchInput(){
    return (
      <div className="quick-search">
        <Scope ref="scope" list={this.props.scopes} value={this.props.activeScope}/>
        <input ref="query" onKeyUp={this.props.onKeyUpHandler} type="search" value={this.props.value}/>
        <button className="btn btn-info" onClick={this.handleOnClick}>Display value</button>
        <span ref="help">{"Choose your scope"}</span>
      </div>
    );
  }
};

module.exports = {
  mixin: SearchInputMixin,
  component: React.createClass(SearchInputMixin)
};
