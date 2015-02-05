module.exports = [{
  method: 'GET',
  path: '/alerts',
  config:{
    handler: require('./alerts-all')
  }
},{
    method: 'POST',
    path: '/alerts',
    config:{
      handler: require('./alerts-create')
    }
  },
  {
    method: 'POST',
    path: '/alerts/{id}/ack',
    config:{
      handler: require('./alerts-ack')
    }
}];
