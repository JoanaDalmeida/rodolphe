var React = require('react');
module.exports = React.createClass({
  render: function renderSummary(){
    var style = {width: "60%"};
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>##</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Amis</th>
            <td><span className="badge">12</span></td>
          </tr>
          <tr>
            <th scope="row">Projet</th>
            <td><span className="badge">8</span></td>
          </tr>
          <tr>
            <th scope="row">Contrat</th>
            <td><span className="badge">4</span></td>
          </tr>
          <tr>
            <th scope="row">Congé</th>
            <td><span className="badge">4</span></td>
          </tr>
          <tr>
            <th scope="row">Avancement</th>
            <td>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={style}>
                  60%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});
