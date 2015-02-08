
//Require dependencies.
require('./initializer');
var render = require('./core/render');

//Require the applications modules
var AlertModule = require('./component/alert');

render(AlertModule, '#notification-center');
//Render all application modules for the first time.
//React.render(<AlertModule />, document.querySelector('#notification-center'));
