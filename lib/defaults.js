module.exports = {
  protocol: 'https://',
  host: /^(development|test)$/i.test(process.env.NODE_ENV) ? 'tartan.plaid.com'
                                                           : 'api.plaid.com',
  endpoint: {
    get: {
      method: 'GET',
      route: 'connect'
    },
    submit: {
      method: 'POST',
      route: 'connect'
    },
    step: {
      method: 'POST',
      route: 'connect/step'
    },
    remove: {
      method: 'DELETE',
      route: 'connect'
    }
  }
};
