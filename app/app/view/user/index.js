var React = require('react');
var UserDetail = require('./detail');
module.exports =  React.createClass({
  render:function(){
    return (
      <div className="userDetail">
        <UserDetail userId={this.props.userId} />
      </div>
    );
  }
});
