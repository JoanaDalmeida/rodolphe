/**@jsx*/

/* Dependencies. */
var React = require('react');
var fetch = require('../../core/fetch');

/**
 * Component for a single alert.
 * @type {*|Function}
 */
module.exports = React.createClass({
  /**
   * Constraints on the properties types.
   */
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  /** @inheritDoc */
  getInitialState: function getAlertInitialState(){
    var data = this.props.data || {};
    data.target = data.target ||{url: "http://google.com", name: "google..."};
    data.code = data.code || "Information";
    data.type = data.type || "info";
    return data;
  },
  render: function() {
    var alert = this.state;
    return (
      <div className={"alert alert-"+alert.type}>
        <button type="button" className="close" onClick={this.props.onAckClick}>
          <span >&times;</span>
        </button>
        <strong>{alert.code}</strong>
        &nbsp;{alert.msg}
        &nbsp;<a href={alert.target.url} className="alert-link">{alert.target.name}</a>
      </div>

    );
  }
});
