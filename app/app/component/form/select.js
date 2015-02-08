module.exports = React.createClass({
  getDefaultProps: function getSelectDefaultProps(){
    return {
      type: text,
      value: [],
      name: undefined
    };
  },
  renderOptions: function(){
    return this.props.value.map(opt=>{
      <option value={opt.code}>{opt.value}</option>;
    })

    )
  },
  render: function renderSelect(){
    return(
      <select name={this.props.name}>
        {this.renderOptions()}
      </select>
    );
  }
});
