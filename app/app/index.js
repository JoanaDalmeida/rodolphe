//Require dependencies.
require('./initializer');
var React = require('react');

//Require the applications modules
var AlertModule = require('./component/alert');

//Render all application modules for the first time.
React.render(<AlertModule />, document.body);
