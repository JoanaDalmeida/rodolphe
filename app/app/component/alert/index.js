/**@jsx*/
var React = require('react');
var fetch = require('../../core/fetch');
var Alert = require('./Alert');
var defaults = require('lodash/object/defaults');
var remove = require('lodash/array/remove');
var find = require('lodash/collection/find');

module.exports = React.createClass({
  getDefaultProps: function(){
    return {hasAutoRefresh: false};
  },
  /**
   * Get the state initial values.
   * @returns {{alerts: Array}}
   */
  getInitialState: function(){
    return{
      alerts:[]
    };
  },
  /** Method called when the component is mounted in the DOM.
   * @override
   */
  componentDidMount: function() {
    this._loadData();
  },
  handleBtnReloadClick: function handleBtnAcceptClick(){
    this._loadData();
  },
  handleBtnAcceptClick: function handleBtnAcceptClick(id){
    var component = this;
    var alerts = component.state.alerts;
    var alertToAccept = find(alerts, function(alert){return alert.id === id;});
    fetch({
      url: 'http://localhost:8080/alerts/'+ id +'/accept/',
      method: "POST",
      data: alertToAccept
    }).then(function(success){
      remove(alerts, function(alert){
        return alert.id === id;
      });
      component.setState({alerts: alerts});
      }, function(err){
      console.error(err);
    });
  },
  /**
   * Sub render of the render function (returns only the alerts).
   * @returns {*}
   */
  renderAlerts: function(){
    return this.state.alerts.map(function(alert){
      return <Alert data={alert} key={alert.id} onAckClick={this.handleBtnAcceptClick.bind(this, alert.id)} />;
    }, this);
  },
  /**
   * Render the component in the virtual DOM.
   * @returns {JSX}
   */
  render: function() {
    return (
      <div className="alertes">
        <h2>Notification center <button className="btn btn-default" onClick={this.handleBtnReloadClick}>rld</button></h2>
        {this.renderAlerts()}
      </div>
    );
  },  /**
   * Load the data from the server.
   * @private
   */
  _loadData: function(){
    var component =  this;
    fetch({url: "http://localhost:8080/alerts/", method: "GET"})
      .then(function(data){
        component.setState({alerts: data});
        if(component.props.hasAutoRefresh){
          component._reloadData();
        }
      }, function (err){
        console.error(err);
      });
  },
  /**
   * Reload the data.
   * @private
   */
  _reloadData: function(){
    var component = this;
    setTimeout(function(){
        component._loadData(); },
      5*1000);
  }
});
