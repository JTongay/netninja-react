var React = require('react');
var ReactDOM = require('react-dom')
var PropTypes = React.PropTypes;

var TodoComponent = React.createClass({

  render: function() {
    return (
      <h1>Booyah</h1>
    );
  }

});

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'))

module.exports = TodoComponent;
