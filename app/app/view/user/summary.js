var React = require('react');
module.exports = React.createClass({
  render: function renderSummary(){
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
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
          </tr>
        </tbody>
      </table>
    );
  }
});
