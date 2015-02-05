var React = require('react'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton,
  FlatButton = mui.FlatButton,LeftNav= mui.LeftNav,
  MenuItem = mui.MenuItem,
  Page = require('./Page');


var Main = React.createClass({
  getInitialState: function() {
   return {menuDocked: false};
 },
  _handleDockButtonClick: function(){
    this.refs.dockedLeftNav.toggle();
  },
  render: function() {
  var menuItems = [
    { route: 'rodolphe', text: 'Rodolphe' },
    { route: 'components', text: 'Components' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/Kleegroup/focus',
     text: 'Focus'
  },
];
    return (
      <div className="focus">
       <LeftNav ref="dockedLeftNav" menuItems={menuItems} docked={this.state.menuDocked} />

        <h1>Focus - React</h1>
        <FlatButton label="ToggleMenu" secondary={true} onTouchTap={this._handleDockButtonClick} />
        <h2>Exemple</h2>
        <Page data={this.props.data}></Page>
      </div>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = Main;
