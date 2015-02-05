var React = require('react');
module.exports = React.createClass({
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    var options = this.props.data.map(function(opt){
            return (<option value={opt.value}>{opt.label}</option>);
          });
    return (
      <div class="input-search">
        <select>
          {options}
        </select>
        <input type="text"/>
      </div>
    );
  }
});