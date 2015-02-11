module.exports = [{
  method: 'GET',
  path: '/alerts/',
  config:{
    handler: require('./alerts-all')
  }
},{
    method: 'POST',
    path: '/alerts/',
    config:{
      handler: require('./alerts-create')
    }
  },
  {
    method: 'POST',
    path: '/alerts/{id}/accept/',
    config:{
      handler: require('./alerts-ack')
    }
},
{
  method: 'GET',
  path: '/users/{id}/',
  config:{
    handler: require('./user-get')
  }
}];
