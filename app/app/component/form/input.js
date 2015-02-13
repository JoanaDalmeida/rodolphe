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
   * Validate the input.
   * @return {object}
   */
  validate: function validateInput(){
    var value = this.getValue();
    if(value === undefined || value === ""){
      return `Le champ ${this.props.name} est requis`;
    }
    if(this.props.validator){
      return this.props.validator(value);
    }
  },
  /**
   * Get the value from the form.
   */
  getValue: function getValue(){
    return this.getDOMNode().value;
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
