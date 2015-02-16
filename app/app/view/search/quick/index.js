var React = require('react');
var SearchInput = require('../../../component/search/input').component;

module.exports =  React.createClass({
  render:function(){
    return (
      <div className="quickSearch">
        <h2>{"Recherche rapide"}</h2>
        <SearchInput />
      </div>
    );
  }
});
