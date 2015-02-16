var React = require('react');
var Scope = require('./scope').component;
var words = require('lodash/string/words');
var SearchInputMixin = {
  getDefaultProps: function(){
    return {
      placeholder: "",
      value:"defaultValue",
      activeScope:2,
      scopes: [
        {code: 1, label: "Scope1"},
        {code: 2, label: "Scope2"},
        {code: 3, label: "Scope3"}
      ],
      minChar: 2
    };
  },
  getValue: function(){
    return {
      scope: this.refs.scope.getValue(),
      query: this.refs.query.getDOMNode().value
    };
  },
  handleOnKeyUp: function onKeyUpHandler(event){
    var val = event.target.value;
    if(val.length >= this.props.minChar){
      console.log("keyUp", words(val));
      if(this.props.handleOnKeyUp){
        this.props.handleOnKeyUp(event);
      }
    }
  },
  handleOnClick: function(){
    console.log('Search value', this.getValue());
  },
  render:function renderSearchInput(){
    return (
      <div className="quick-search row">
        <Scope ref="scope" className="col-xs-2" list={this.props.scopes} value={this.props.activeScope}/>
        <input ref="query" className="col-xs-10" onKeyUp={this.handleOnKeyUp} type="search" value={this.props.value}/>
        <button className="btn btn-info" onClick={this.handleOnClick}>Display value</button>
        <span className="col-xs-12" ref="help">{"Define the scope of research"}</span>
      </div>
    );
  }
};

module.exports = {
  mixin: SearchInputMixin,
  component: React.createClass(SearchInputMixin)
};
