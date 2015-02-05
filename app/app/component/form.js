/**@jsx*/
var React = require('react');
var Input = require('./input');
module.exports = React.createClass({

  renderInputs: function renderInputs(){
    var inputs ={};
    for(var key in this.props.data ){
      if(key !== metadata){
        inputs[key] = <Input name={key} data={this.props.data.metadata[key]}/>;
      }
    }
    return inputs;
  },
  handleButtonEditClick: function handleButtonEditClick(e){
    e.preventDefault();
    console.log('click');
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.

    return (
      <Form>
        {this.renderInputs()}
        <button onClick={this.handleButtonEditClick}>Edit</button>
      </Form>

    );
  }
});
