require('./config');
var React = require('react');
/*
var SearchInput = require('./component/search-input');

var User = require('./Model/user');
var user = new User({firstName: "pierre", lastName: "besson"});

var Main = require('./component/Main');
var MyComponent = React.createClass({
  handleClick: function() {
    // Explicitly focus the text input using the raw DOM API.
    this.refs.myTextInput.getDOMNode().focus();
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div>
        <SearchInput data={this.props.data.context} />
        <Page data={this.props.data} />
        <button value={this.props.name} onClick={this.handleClick} />
      </div>
    );
  }
});
*/
var AlertModule = require('./component/alert');

React.render(<AlertModule />, document.body);
/*React.render(
  <MyComponent name="pierre" data={pierre}/>,
  document.getElementById('example')
);*/
