module.exports = React.createClass({
  getDefaultProps: function getInputDefaultProps(){
    return {
      type: text,
      value: undefined,
      name: undefined
    };
  },
  render: function renderInput(){
    return(
      <input
        name={this.props.name}
        value={this.props.value}
        type = {this.props.type}
      />
    );
  }
});
