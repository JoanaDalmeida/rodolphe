var React = require('react');
module.exports = React.createClass({
  getDefaultProps: function getInputDefaultProps(){
    return {
      hasLabel: true,
      type: 'text',
      value: undefined,
      name: undefined
    };
  },
  render: function renderInput(){
    return(
      <div className>
        <label  htmlFor={this.props.name}>{this.props.name}</label>
        <input
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          type = {this.props.type}
        />
      </div>
    );
  }
});
