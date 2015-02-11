var React = require('react');
var panelMixin = {
  heading: function(){
    if(this.props.title){
      return (
        <div className="panel-heading">
          {this.props.title}
        </div>
      );
    }
  },
  render: function renderPanel(){
    return(
      <div className="panel panel-default">
        {this.heading()}
        <div className="panel-body">
            {this.props.children}
        </div>
      </div>
    );
  }
}
module.exports = {
  mixin: panelMixin,
  component: React.createClass(panelMixin)
};
