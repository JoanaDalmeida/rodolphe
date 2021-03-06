//Dependencies.
var Router = require('backbone').Router;
var render = require('../core/render');


var AlertModule = require('../component/alert');
render(AlertModule, '#notification-center');


var AppRouter = Router.extend({
  routes: {
    '': 'home',
    'search': 'search'
  },
  home: function handleHomeRoute(){
    console.log('ROUTE: HOME');
    //Require the applications modules
    var UserDetailView = require('../view/user');
    //React.render(<UserDetailView userId="12344"/>, document.querySelector('#page'));
     render(UserDetailView, '#page', {
       props:{userId: "6c4a5d96-dc8a-461d-8b23-d9b5ed2f4883"}
     });
  },
  search : function handleSearchRoute(){
    console.log('ROUTE: SEARCH');
    //Require the applications modules
    var QuickSearchView = require('../view/search/quick');
    //React.render(<UserDetailView userId="12344"/>, document.querySelector('#page'));
     render(QuickSearchView, '#page');

    return;
  }
});
module.exports = new AppRouter();
