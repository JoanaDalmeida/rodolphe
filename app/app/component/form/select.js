var React = require('react');
module.exports = React.createClass({
  getDefaultProps: function getSelectDefaultProps(){
    return {
      value: [],
      name: undefined
    };
  },
  renderOptions: ()=>{
    return this.props.value.map((opt) => {
      return <option value={opt.code}>{opt.value}</option>;
    });
  },
  render: function renderSelect(){
    return(
      <select name={this.props.name}>
        {this.renderOptions()}
      </select>
    );
  }
});
