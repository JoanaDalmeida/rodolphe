var React = require('react');
/**/
var inputMixin = {
  getDefaultProps: function getInputDefaultProps(){
    return {
      type: 'text',
      value: undefined,
      name: undefined
    };
  },
  /**
   * Render an input.
   * @return {[type]} [description]
   */
  render: function renderInput(){
    return(
        <input
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          type={this.props.type}
          className={this.props.css} 
        />
    );
  }
};


module.exports = {
  mixin: inputMixin,
  component: React.createClass(inputMixin)
}
