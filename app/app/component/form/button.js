var React = require('react');
/**/
var buttonMixin = {
  getDefaultProps: function getInputDefaultProps(){
    return {
      type: 'submit',
      action: undefined,
      isPressed: false,
      key: undefined
    };
  },
  handleOnClick: function(){
    if(this.props.handleOnClick){
      return this.props.handleOnClick.apply(this, arguments);
    }
    if(!this.props.action ||!this.action[this.props.action]){
      return console.warn('Your button action is not implemented');
    }
    return this.action[this.props.action].apply(this,arguments);
  },
  getInitialState: function(){
    return {
      isPressed: this.props.isPressed
    };
  },
  _className: function(){
    return "btn "+ "btn-" + this.props.css;
  },
  renderPressedButton: function(){
    return (
      <button>Loading...</button>
    );
  },
  /**
   * Render the button.
   * @return {[type]} [description]
   */
  render: function renderInput(){
    if(this.state.isPressed){
      return this.renderPressedButton();
    }
    return(
        <button
          onClick={this.onClick}
          type={this.props.type}
          className={this._className}
        >{this.props.key}</button>
    );
  }
};


module.exports = {
  mixin: buttonMixin,
  component: React.createClass(buttonMixin)
}
