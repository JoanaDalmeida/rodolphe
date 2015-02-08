//Get the form mixin.
var formMixin = require('../../component/form');
module.exports =  React.createClass({
  mixin: formMixin,
  render:()=> {
    return(
      <form>
        {this.input("login")}
        {this.input("password")}
      </form>
    );
  }
});
