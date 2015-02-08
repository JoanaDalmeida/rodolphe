var React = require('react');

var labelMixin = {
  getDefaultProps: function(){
    return {
      name: undefined,
      key: undefined
    };
  },
  i18n: function(prop){
    return prop;
  },
  render: function(){
    return (
      <label className={this.props.css}  htmlFor={this.props.name}>
        {this.i18n(this.props.key)}
      </label>
    )
  }
};

module.exports =  {
  mixin: labelMixin,
  component: React.createElement(labelMixin)
}
