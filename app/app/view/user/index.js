var React = require('react');
var UserDetail = require('./detail');
var UserAddress = require('./address');
var UserSummary = require('./summary');

module.exports =  React.createClass({
  render:function(){
    return (
      <div className="row">
        <h2>{"Detail d'un utilisateur"}</h2>
        <div className="userDetail col-xs-8">
          <UserDetail id={this.props.userId} isEdit={true}/>
          <UserAddress id={this.props.userId} />
        </div>
        <div className="userSummary col-xs-4">
          <UserSummary />
        </div>
      </div>
    );
  }
});
