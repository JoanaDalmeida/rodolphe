var React = require('react');
var UserDetail = require('./detail');
var UserAddress = require('./address');
module.exports =  React.createClass({
  render:function(){
    return (
      <div className="userDetail">
        <h2>{"Detail d'un utilisateur"}</h2>
        <UserDetail id={this.props.userId}/>
        <UserAddress id={this.props.userId} />
      </div>
    );
  }
});
