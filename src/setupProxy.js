const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api-bnmo.herokuapp.com',
      changeOrigin: true,
    })
  );
};