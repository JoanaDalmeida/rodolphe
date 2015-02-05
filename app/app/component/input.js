var React = require('react');
var Input = require('material-ui').Input;
module.exports = React.createClass({
  handleChange: function(e) {
    console.log(e);
    this.setState({userInput: e.target.value});
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
        <Input type="text" error={this.props.error} ref="myTextInput" onChange={this.handleChange} placeholder={this.props.name} name={this.props.name} value={this.props.name} data-metadata={this.props.data} />
    );
  }
});
