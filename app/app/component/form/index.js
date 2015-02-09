var React = require('react');
var Field =  require('./field').component;
var Select =  require('./select').component;

var formMixin = {
  getDefaultProps: ()=>{
    return {
      hasEdit: true,
      isEdit: false};
  },
  fieldFor: function(name){
    return React.createElement(Field, {name: name/*, error: "test d'erreur"*/});
  },
  selectFor: function(name){
    return React.createElement(Select, {name: name});
  },
  /**
   * Get the state initial values.
   * @returns {{alerts: Array}}
   */
  getInitialState:function(){
    return{
      id: this.props.id
    };
  },
  componentDidMount: function(){
    this._loadData();
  },
  _getId: function(){
    return this.state.id;
  },
  _loadData: function(){
    this.action.loadEntity(this._getId());
  },
  _className: function(){
    return "form-horizontal";
  },
  render: function (){
    return (
      <form className={this._className()}>
        {this.renderContent()}
      </form>
    );
  }
};

module.exports = {
  mixin: formMixin,
  component: React.createElement(formMixin)
}
