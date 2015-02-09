var React = require('react');
var UserDetail = require('./detail');
module.exports =  React.createClass({
  render:function(){
    return (
      <div className="userDetail">
        <h2>{"Detail d'un utilisateur"}</h2>
        <UserDetail userId={this.props.userId}/>
      </div>
    );
  }
});
