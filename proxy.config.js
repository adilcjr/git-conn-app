const proxyConfig = [{
  context: '/api/repositories',
  target: 'https://git-conn-api.herokuapp.com/',
  secure: false
}];

module.exports = proxyConfig;
